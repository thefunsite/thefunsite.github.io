var map = {
    title: "advanced training",
    song: "env2",
    maker: "Rocky707",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.00014000000000000001, -3.95986, -84.38986000000001], [0, 0, 0], [3.2, 0.24, 8.88], 3.0, 1.5, 0, 0.6, false);
        a.p([-0.84979, 4.39021, -108.05978999999999], [0, 0, 0], [1.44, 9.88, 1.24], 3.0, 999999.0, 0, 0.6, false);
        a.p([0.00028000000000000003, 2.7602800000000003, -32.099720000000005], [0, 0, 0], [3.2, 0.24, 18.66], 3.0, 0, 0, 0.6, false);
        a.p([0.00035000000000000005, -0.23965, -39.31965], [0, 0, 0], [3.2, 0.24, 82.98], 3.0, 0, 0, 0.6, false);
        a.c([0.00049, 0.30049, -51.93951], true);
        a.c([1.01, 0.3, -63.76], true);
        a.c([-0.85993, 0.30007, -63.759930000000004], true);
        a.p([0.00014000000000000001, -1.04986, -109.18986000000001], [0, 0, 0], [3.2, 2, 44], 3.0, 0, 0, 0.6, false);
        a.e([0.00021, 0.45021, -128.91979]);
    },
    post: function() {
        cc.set_monkey("speed", default_speed * 0.25);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -1.079790000000001) {
                    a.msg_set("Welcome to advanced training! ");
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -11.83979) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -11.89986) {
                    a.msg_set("This will show you some advanced tricks ");
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -22.65986) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -22.75993) {
                    a.msg_set("First off, your gravity can change. ");
                    a.g(null, -1.0, null);
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -33.51993) {
                    a.msg_del();
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -41.929579999999994) {
                    steer = default_steer * -1.0;
                    a.msg_set("Your controls can be inverted, too! ");
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -52.68958) {
                    steer = cc.get("steer", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -54.08965) {
                    speed = default_speed * 0.5;
                    a.msg_set("Speed and turn can alter too! ");
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -64.44964999999999) {
                    speed = cc.get("speed", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -77.34951) {
                    a.msg_set("Some platforms are bouncy! ");
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -90.50950999999999) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -91.32000000000001) {
                    a.msg_set("Some platforms are so bouncy they kill you! ");
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -104.48) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -109.91993000000001) {
                    a.msg_set("Thats the end of advanced training! ");
                    this.section_id += 1
                }
                break;
            case 15:
                if (PZ < -123.07993) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -123.50958000000001) {
                    a.msg_set("Come back next time for intense training! ");
                    this.section_id += 1
                }
                break;
            case 17:
                if (PZ < -136.66958000000002) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.00014000000000000001, -3.95986, -84.38986000000001], [0, 0, 0], [3.2, 0.24, 8.88]);
        a.re('P1', [-0.84979, 4.39021, -108.05978999999999], [0, 0, 0], [1.44, 9.88, 1.24]);
        a.re('P2', [0.00028000000000000003, 2.7602800000000003, -32.099720000000005], [0, 0, 0], [3.2, 0.24, 18.66]);
        a.re('P3', [0.00035000000000000005, -0.23965, -39.31965], [0, 0, 0], [3.2, 0.24, 82.98]);
        a.re('C0', [0.00049, 0.30049, -51.93951], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [1.01, 0.3, -63.76], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [-0.85993, 0.30007, -63.759930000000004], [0, 0, 0], [2, 2, 2]);
        a.re('P4', [0.00014000000000000001, -1.04986, -109.18986000000001], [0, 0, 0], [3.2, 2, 44]);
        a.re('E0', [0.00021, 0.45021, -128.91979], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
