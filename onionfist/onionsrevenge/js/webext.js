const chrx_ids = ["imkabmapkhnlkiabmpgjjhlglcjphbkb", "afgdfoaamlgjopcmnffeafjcgdlcliea"];

var webext = {
    last_game_boot_time: null,
    init: async function() {
        if (deployment.is_oworld) {
            return;
        }
        if (deployment.is_localhost) {
            return;
        }
        
        // GAME ID
        let gid = await sync.async_get("game_id");
        if (gid == null) {
            gid = Date.now() + "-" + Math.floor(Math.random() * 900000);
            await sync.async_set("game_id", gid);
        }
        console.log("gid", gid);

        // BOOT TIME
        this.last_game_boot_time = Date.now()
        await this.set_from_web("last_game_boot_time", this.last_game_boot_time);
        if (deployment.is_chrome_ext) {
            await sync.async_set("last_game_boot_time", this.last_game_boot_time);
        }

        // CHRX ONLY FROM BELOW>
        if (deployment.is_chrome_ext) {
            return;
        }
        if (window.chrome == null) {
            return;
        }
        
        await webadd.webext(gid);
        
    },
    afk: function() {
        console.log("AFK");
        state.set("afk");
    },
    active_again: async function() {
        console.log("Active button clicked.");
        $("#afk_button").hide();
        let last_game_boot_time = await this.get_from_web(["last_game_boot_time"]); //await sync.async_get("last_game_boot_time");
        last_game_boot_time = last_game_boot_time[sync.key("last_game_boot_time")];
        console.log("last_game_boot_time", last_game_boot_time);
        if (last_game_boot_time == this.last_game_boot_time) {
            state.set("main_menu");
        } else {
            location.reload();
        }

        $("#afk_button").show();
    },
    get_progress: function() {
        if (deployment.is_oworld) {
            return;
        }
        var storage_vars = [];
        for (let i = 0; i < localStorage.length; i++)   {
            let key = localStorage.key(i);
            if ((key.slice(0,2) == sync.prefix) && (key.slice(-2) == "-n")) {
                storage_vars.push(key);
            }
            // console.log( + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
        }
        var num_maps_complete = 0;
        for (let storage_var of storage_vars) {
            var n = localStorage.getItem(storage_var) || 0;
            if (n > 0) {
                num_maps_complete += 1;
            }
        }
        console.log("storage_vars", storage_vars);
        return num_maps_complete;
        // localStorage.getItem(
    },
    record_set: async function(key, val) {
        if (deployment.is_oworld) {

        } else if (deployment.is_chrome_ext == true) {
            key = key.slice(2);
            if (key == "altered_vars") {
                return;
            }
            var altered_vars = await sync.async_get("altered_vars") || JSON.stringify([]);
            altered_vars = JSON.parse(altered_vars);

            if (altered_vars.indexOf(key) >= 0) {
                return;
            }

            altered_vars.push(key);

            await sync.async_set("altered_vars", JSON.stringify(altered_vars));
        } else {
            await this.set_from_web(key, val);
        }
    },
    worker_req: function(data) {
        return new Promise(async (resolve, reject) => {
            if (chrome.runtime == null) {
                console.log("no runtime, maybe due to localhost.");
                resolve(null);
                return;
            }
            for (const chrx_id of chrx_ids) {
                let resp = await webext.worker_one(chrx_id, data);
                if (resp != null) {
                    console.log("resp", resp);
                    resolve(resp);
                    return;
                }
            }
            resolve(null);
        });
    },
    worker_one: function(chrx_id, data) {
        return new Promise((resolve, reject) => {
            try {
                chrome.runtime.sendMessage(chrx_id, data, function(response) {
                    resolve(response);
                    return;
                });
            } catch (error) {
                console.log("Err", error);
                resolve(null);
            }
        });
    },
    ping_from_web: function() {
        if (deployment.is_oworld) {
            return;
        }

        return this.worker_req({code: "ping_from_web"});
    },
    get_code: function(code) {
        if (deployment.is_oworld) {
            return;
        }

        return this.worker_req({code: code});
    },
    send_code: function(code, modif={}) {
        if (deployment.is_oworld) {
            return;
        }

        var obj = {code: code};
        obj = {
            ...obj,
            ...modif
        }

        return this.worker_req(obj);

    },
    get_from_web: function(keys) {
        if (deployment.is_oworld) {
            return;
        }
        
        let obj = {keys: sync.keys(keys), code: "get_from_web"};

        return this.worker_req(obj);

    },
    get_one_from_web: function(key) {
        if (deployment.is_oworld) {
            return;
        }
        return new Promise(async (resolve, reject) => {
            let val = await webext.get_from_web([key]);
            if (val == null) {
                resolve(null);
                return;
            }
            resolve(val[sync.key(key)]);
        });
    },
    set_from_web: function(key, val) {
        if (deployment.is_oworld) {
            return;
        }
        var obj = {};
        obj[sync.key(key)] = val;

        return this.worker_req({obj: obj, code: "set_from_web"});
    },
    to_num: function(x) {
        // let n = parseFloat(x);
        // if (String(n) == x) {
        //     return n;
        // } else {
        //     return x;
        // }
        if (x == null) return null;
        if (x === false) return false;
        if (x === true) return true;

        let n = (+x);
        if (!isNaN(n)) {
            return n;
        } else {
            return x;
        }
    },
    clear_storage_data: async function() {
        if (deployment.is_oworld) {
            await fire("game_sync_erase", []);
            sync.oworld_data = {};
        } else if (deployment.is_chrome_ext == true) {
            chrome.storage.local.clear(function() {
                console.log("Erased data");
            });
        } else {
            await this.send_code("clear_storage_data", {});
            for (let i = localStorage.length -1; i >= 0; i--) {
                let key = localStorage.key(i);
                if (key.slice(0,2) == sync.prefix) {
                    localStorage.removeItem(key);
                }
            }
        }
    }

}