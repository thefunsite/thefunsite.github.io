var map = {
    title: "Nothing is Easy",
    song: "env2",
    maker: "uPilot",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-17.56972, 1.21028, -674.70972], [0, 0, -0.75], [0.8, 10.08, 12.66], "1", 0, 0, 0.6, true, false);
        a.p([-17.56965, 1.21035, -687.24965], [0.01, 0, -0.61], [1.16, 9.72, 12.66], "1", 0, 0, 0.6, true, false);
        a.p([-17.569580000000002, 1.21042, -699.91958], [0, 0, -0.45], [1.04, 7.5, 12.66], "1", 0, 0, 0.6, true, false);
        a.p([-17.56951, 1.21049, -713.64951], [0, 0, -0.36], [0.98, 6.82, 14.88], "1", 0, 0, 0.6, true, false);
        a.y([0, 0.15, -27.25], [0, 0, 0], [2, 2, 2], "00ff00,0.5", 0, 0, 0.6, true, 1);
        a.p([0.00007000000000000001, -1.23993, -43.45993000000001], [0, 0, 0], [2.48, 2, 20.12], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, -1.23986, -63.51986], [0, 0, 0], [2.48, 2, 20.12], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00021, -1.23979, -123.37979], [0, 0, 0], [2.48, 2, 20.12], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00028000000000000003, -1.23972, -143.76972], [0, 0, 0], [2.48, 2, 20.12], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00035000000000000005, -1.2396500000000001, -163.74965], [0, 0, 0], [2.48, 2, 20.12], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00042, -1.23958, -103.22958], [0, 0, 0], [2.48, 2, 20.12], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00049, -1.23951, -183.64951000000002], [0, 0, 0], [2.48, 2, 20.12], "-1.0", 0, 0, 0.6, false, false);
        a.p([0, -1.24, -83.76], [0, 0, 0], [2.48, 2, 20.12], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00007000000000000001, -1.23993, -255.95992999999999], [0, 0, 0], [2.48, 2, 124.6], "-1.0", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, -1.23986, -330.31985999999995], [0, 0, 0], [2.48, 2, 124.6], "-1.0", 0, 0, 0.6, false, false);
        a.p([-12.61979, 5.07021, -527.54979], [0.09, 0, 0], [10.58, 0.62, 28.6], "2.0", 0, 0, 0.6, false, false);
        a.p([-0.7497199999999999, -1.23972, -422.29972000000004], [0.08, 0, 0], [2.48, 2, 20.12], "2.0", 0, 0, 0.6, false, false);
        a.p([-2.27965, -1.2396500000000001, -442.19964999999996], [0.08, 0, 0], [2.48, 2, 20.12], "2.0", 0, 0, 0.6, false, false);
        a.p([-3.9195800000000003, -1.23958, -463.57957999999996], [0.08, 0, 0], [2.48, 2, 23.28], "2.0", 0, 0, 0.6, false, false);
        a.p([0.00049, -1.23951, -402.59951], [0, 0, 0], [2.48, 2, 20.12], "2.0", 0, 0, 0.6, false, false);
        a.p([-6.11, -1.24, -487.79], [0.09, 0, 0], [15.94, 2, 26.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-14.06993, 5.07007, -543.97993], [0.09, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-25.109859999999998, -1.23986, -647.3398599999999], [0.09, 0, 0], [16.02, 2, 42.26], "2.0", 0, 0, 0.6, false, false);
        a.p([-14.319790000000001, 5.07021, -547.99979], [0.09, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-14.31972, 5.07028, -552.06972], [0.01, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-14.21965, 5.07035, -556.1596499999999], [-0.05, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-13.95958, 5.0704199999999995, -560.2395799999999], [-0.11, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-13.489510000000001, 5.0704899999999995, -564.27951], [-0.16, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-12.72, 5.07, -568.28], [-0.19, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-12.11993, 5.07007, -572.30993], [-0.12, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-11.659860000000002, 5.07014, -576.3298599999999], [-0.08, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-11.659790000000001, 5.07021, -580.44979], [-0.01, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-11.65972, 5.07028, -584.52972], [0.07, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-12.14965, 5.07035, -588.61965], [0.15, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-12.749580000000002, 5.0704199999999995, -592.58958], [0.15, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-13.17951, 5.0704899999999995, -596.61951], [0.15, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-13.92, 5.07, -600.57], [0.18, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-14.669929999999999, 5.07007, -604.53993], [0.2, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-15.55986, 5.07014, -608.52986], [0.26, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-16.60979, 5.07021, -612.3997899999999], [0.31, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-18.01972, 5.07028, -616.23972], [0.38, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-19.17965, 5.07035, -620.13965], [0.32, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-20.39958, 5.0704199999999995, -624.03958], [0.26, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-21.40951, 5.0704899999999995, -628.05951], [0.26, 0, 0], [2.48, 0.62, 3.98], "2.0", 0, 0, 0.6, false, false);
        a.p([-25.11, -4.3, -734.19], [0.09, 0, 0], [15.94, 2, 26.98], "2.0", 0, 0, 0.6, true, false);
        a.p([-25.29993, -6.379930000000001, -923.08993], [0.09, 0, 0], [13.48, 3.76, 12.38], "6.0", 0, 0, 0.6, false, false);
        a.p([-25.109859999999998, -6.37986, -781.4398600000001], [0.09, 0, 0], [15.4, 3.76, 12.16], "6.0", 0, 0, 0.6, true, false);
        a.p([-25.109789999999997, -6.379790000000001, -799.9797900000001], [0.09, 0, 0], [15.4, 3.76, 12.16], "6.0", 0, 0, 0.6, true, false);
        a.p([-25.109720000000003, -6.37972, -762.55972], [0.09, 0, 0], [15.4, 3.76, 12.16], "6.0", 0, 0, 0.6, true, false);
        a.p([-23.749650000000003, -6.379650000000001, -853.8096499999999], [0.09, 0, 0], [15.4, 3.76, 12.16], "6.0", 0, 0, 0.6, true, false);
        a.p([-23.74958, -6.37958, -836.75958], [0.09, 0, 0], [15.4, 3.76, 12.16], "6.0", 0, 0, 0.6, true, false);
        a.p([-23.74951, -6.37951, -818.97951], [0.09, 0, 0], [15.4, 3.76, 12.16], "6.0", 0, 0, 0.6, true, false);
        a.p([-23.75, -6.38, -905.95], [0.09, 0, 0], [15.4, 3.76, 12.16], "6.0", 0, 0, 0.6, true, false);
        a.p([-23.74993, -6.379930000000001, -888.09993], [0.09, 0, 0], [15.4, 3.76, 12.16], "6.0", 0, 0, 0.6, true, false);
        a.p([-23.749859999999998, -6.37986, -870.1998600000001], [0.09, 0, 0], [15.4, 3.76, 12.16], "6.0", 0, 0, 0.6, true, false);
        a.c([-29.01993, -3.8299299999999996, -760.95993], true);
        a.c([-20.93986, -3.8298599999999996, -781.25986], true);
        a.c([-28.91979, -3.8297899999999996, -781.02979], true);
        a.c([-28.91972, -3.8297199999999996, -798.6497199999999], true);
        a.c([-24.02965, -3.8296499999999996, -818.94965], true);
        a.c([-26.86958, -3.8295800000000004, -835.40958], true);
        a.c([-26.869510000000002, -3.8295100000000004, -854.27951], true);
        a.c([-19.34, -3.8299999999999996, -854.28], true);
        a.c([-19.33993, -3.8299299999999996, -871.1299300000001], true);
        a.c([-23.32986, -3.8298599999999996, -871.12986], true);
        a.c([-23.32979, -3.8297899999999996, -888.06979], true);
        a.c([-29.329720000000002, -3.8297199999999996, -888.06972], true);
        a.c([-28.109650000000002, -3.8296499999999996, -906.49965], true);
        a.c([-19.93958, -3.8295800000000004, -906.4895799999999], true);
        a.c([0.00049, 0.24048999999999998, -481.00951000000003], true);
        a.c([-9.6, 0.24, -481.01], true);
        a.c([-6.52993, 0.24006999999999995, -490.80993], true);
        a.c([-2.4698599999999997, 0.24014000000000002, -490.80985999999996], true);
        a.c([-4.17979, -0.28979, -464.58979], true);
        a.c([-2.82972, -0.28972, -458.09972], true);
        a.c([-1.11965, -0.2896500000000001, -435.51964999999996], true);
        a.c([0.20042000000000001, -0.28958000000000006, -421.05958], true);
        a.c([-0.71951, -0.28950999999999993, -412.44951000000003], true);
        a.c([-1.81, -0.29000000000000004, -443.92], true);
        a.c([-2.26993, -0.28993, -435.51993000000004], true);
        a.c([-3.09986, -0.2898600000000001, -443.91985999999997], true);
        a.c([-1.4697900000000002, -0.28979, -421.05979], true);
        a.c([-1.80972, -0.28972, -427.57972], true);
        a.c([-5.629650000000001, 0.24034999999999995, -481.00964999999997], true);
        a.c([-5.62958, 0.24041999999999997, -485.49958], true);
        a.c([-5.62951, 0.24048999999999998, -496.61951], true);
        a.c([-11.68, 0.24, -496.62], true);
        a.c([-1.3899299999999999, 0.24006999999999995, -496.61993], true);
        a.c([-1.3898599999999999, 0.24014000000000002, -485.64986], true);
        a.c([-10.50979, 0.24020999999999998, -485.64979], true);
        a.c([-10.50972, 0.24027999999999994, -490.82972], true);
        a.c([-8.35965, 0.24034999999999995, -487.96964999999994], true);
        a.c([-8.35958, 0.24041999999999997, -477.77958], true);
        a.c([-2.9595100000000003, 0.24048999999999998, -481.00951000000003], true);
        a.c([-2.96, 0.24, -483.56], true);
        a.c([-3.66993, 0.24006999999999995, -488.33993000000004], true);
        a.c([-3.66986, 0.24014000000000002, -478.21986], true);
        a.p([0.00028000000000000003, -1.28972, -13.36972], [0, 0, 0], [2, 2, 29.66], "1", 0, 0, 0.6, false, false);
        a.p([0.00035000000000000005, -1.2396500000000001, -30.819650000000003], [0, 0, 0], [2.48, 2, 5.3], "-1.0", 0, 0, 0.6, false, false);
        a.e([-25.26958, -3.5395800000000004, -921.68958]);
    },
    post: function() {
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.19993000000000016) {
                    light.intensity = 0.8;
                    a.msg_set("What an easy map! ");
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -29.73993) {
                    light.intensity = cc.get("light.intensity", null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -29.76957999999999) {
                    speed = default_speed * 99.0;
                    rotation = 0.0 * Math.PI / 180;
                    steer = default_steer * 0.0;
                    light.intensity = 0.0;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -403.46957999999995) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    light.intensity = cc.get("light.intensity", null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -404.52979) {
                    a.msg_set("Nothing is easy in life! ");
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -469.54979) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -470.89964999999995) {
                    a.msg_set("Time for some antigravity! ");
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -505.37964999999997) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -505.71978999999993) {
                    camera.maxZ = 15.0;
                    a.g(null, -1.0, null);
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -632.0797899999999) {
                    camera.maxZ = cc.get("camera.maxZ", null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -633.39972) {
                    a.msg_set("This is gonna be the easiest wall riding in your life! ");
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -666.3197200000001) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -666.58986) {
                    a.msg_set("Don't Jump! ");
                    a.g(-0.6, null, null);
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -720.5298600000001) {
                    a.msg_del();
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -721.88) {
                    speed = default_speed * 1.12;
                    steer = default_steer * 2.02;
                    a.jh(0.8);
                    a.js(0.1);
                    a.msg_set("Now Jump! ");
                    this.section_id += 1
                }
                break;
            case 15:
                if (PZ < -920.08) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.jh(null);
                    a.js(null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -921.09951) {
                    speed = default_speed * 0.5;
                    steer = default_steer * 4.12;
                    a.jh(0.8);
                    a.js(1.1);
                    a.msg_set("GG! ");
                    this.section_id += 1
                }
                break;
            case 17:
                if (PZ < -967.83951) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.jh(null);
                    a.js(null);
                    a.msg_del();
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-17.56972, 1.21028, -674.70972], [0, 0, -0.75], [0.8, 10.08, 12.66]);
        a.re('P1', [-17.56965, 1.21035, -687.24965], [0.01, 0, -0.61], [1.16, 9.72, 12.66]);
        a.re('P2', [-17.569580000000002, 1.21042, -699.91958], [0, 0, -0.45], [1.04, 7.5, 12.66]);
        a.re('P3', [-17.56951, 1.21049, -713.64951], [0, 0, -0.36], [0.98, 6.82, 14.88]);
        a.re('Y0', [0, 0.15, -27.25], [0, 0, 0], [2, 2, 2]);
        a.re('P4', [0.00007000000000000001, -1.23993, -43.45993000000001], [0, 0, 0], [2.48, 2, 20.12]);
        a.re('P5', [0.00014000000000000001, -1.23986, -63.51986], [0, 0, 0], [2.48, 2, 20.12]);
        a.re('P6', [0.00021, -1.23979, -123.37979], [0, 0, 0], [2.48, 2, 20.12]);
        a.re('P7', [0.00028000000000000003, -1.23972, -143.76972], [0, 0, 0], [2.48, 2, 20.12]);
        a.re('P8', [0.00035000000000000005, -1.2396500000000001, -163.74965], [0, 0, 0], [2.48, 2, 20.12]);
        a.re('P9', [0.00042, -1.23958, -103.22958], [0, 0, 0], [2.48, 2, 20.12]);
        a.re('P10', [0.00049, -1.23951, -183.64951000000002], [0, 0, 0], [2.48, 2, 20.12]);
        a.re('P11', [0, -1.24, -83.76], [0, 0, 0], [2.48, 2, 20.12]);
        a.re('P12', [0.00007000000000000001, -1.23993, -255.95992999999999], [0, 0, 0], [2.48, 2, 124.6]);
        a.re('P13', [0.00014000000000000001, -1.23986, -330.31985999999995], [0, 0, 0], [2.48, 2, 124.6]);
        a.re('P14', [-12.61979, 5.07021, -527.54979], [0.09, 0, 0], [10.58, 0.62, 28.6]);
        a.re('P15', [-0.7497199999999999, -1.23972, -422.29972000000004], [0.08, 0, 0], [2.48, 2, 20.12]);
        a.re('P16', [-2.27965, -1.2396500000000001, -442.19964999999996], [0.08, 0, 0], [2.48, 2, 20.12]);
        a.re('P17', [-3.9195800000000003, -1.23958, -463.57957999999996], [0.08, 0, 0], [2.48, 2, 23.28]);
        a.re('P18', [0.00049, -1.23951, -402.59951], [0, 0, 0], [2.48, 2, 20.12]);
        a.re('P19', [-6.11, -1.24, -487.79], [0.09, 0, 0], [15.94, 2, 26.98]);
        a.re('P20', [-14.06993, 5.07007, -543.97993], [0.09, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P21', [-25.109859999999998, -1.23986, -647.3398599999999], [0.09, 0, 0], [16.02, 2, 42.26]);
        a.re('P22', [-14.319790000000001, 5.07021, -547.99979], [0.09, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P23', [-14.31972, 5.07028, -552.06972], [0.01, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P24', [-14.21965, 5.07035, -556.1596499999999], [-0.05, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P25', [-13.95958, 5.0704199999999995, -560.2395799999999], [-0.11, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P26', [-13.489510000000001, 5.0704899999999995, -564.27951], [-0.16, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P27', [-12.72, 5.07, -568.28], [-0.19, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P28', [-12.11993, 5.07007, -572.30993], [-0.12, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P29', [-11.659860000000002, 5.07014, -576.3298599999999], [-0.08, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P30', [-11.659790000000001, 5.07021, -580.44979], [-0.01, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P31', [-11.65972, 5.07028, -584.52972], [0.07, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P32', [-12.14965, 5.07035, -588.61965], [0.15, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P33', [-12.749580000000002, 5.0704199999999995, -592.58958], [0.15, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P34', [-13.17951, 5.0704899999999995, -596.61951], [0.15, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P35', [-13.92, 5.07, -600.57], [0.18, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P36', [-14.669929999999999, 5.07007, -604.53993], [0.2, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P37', [-15.55986, 5.07014, -608.52986], [0.26, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P38', [-16.60979, 5.07021, -612.3997899999999], [0.31, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P39', [-18.01972, 5.07028, -616.23972], [0.38, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P40', [-19.17965, 5.07035, -620.13965], [0.32, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P41', [-20.39958, 5.0704199999999995, -624.03958], [0.26, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P42', [-21.40951, 5.0704899999999995, -628.05951], [0.26, 0, 0], [2.48, 0.62, 3.98]);
        a.re('P43', [-25.11, -4.3, -734.19], [0.09, 0, 0], [15.94, 2, 26.98]);
        a.re('P44', [-25.29993, -6.379930000000001, -923.08993], [0.09, 0, 0], [13.48, 3.76, 12.38]);
        a.re('P45', [-25.109859999999998, -6.37986, -781.4398600000001], [0.09, 0, 0], [15.4, 3.76, 12.16]);
        a.re('P46', [-25.109789999999997, -6.379790000000001, -799.9797900000001], [0.09, 0, 0], [15.4, 3.76, 12.16]);
        a.re('P47', [-25.109720000000003, -6.37972, -762.55972], [0.09, 0, 0], [15.4, 3.76, 12.16]);
        a.re('P48', [-23.749650000000003, -6.379650000000001, -853.8096499999999], [0.09, 0, 0], [15.4, 3.76, 12.16]);
        a.re('P49', [-23.74958, -6.37958, -836.75958], [0.09, 0, 0], [15.4, 3.76, 12.16]);
        a.re('P50', [-23.74951, -6.37951, -818.97951], [0.09, 0, 0], [15.4, 3.76, 12.16]);
        a.re('P51', [-23.75, -6.38, -905.95], [0.09, 0, 0], [15.4, 3.76, 12.16]);
        a.re('P52', [-23.74993, -6.379930000000001, -888.09993], [0.09, 0, 0], [15.4, 3.76, 12.16]);
        a.re('P53', [-23.749859999999998, -6.37986, -870.1998600000001], [0.09, 0, 0], [15.4, 3.76, 12.16]);
        a.re('C0', [-29.01993, -3.8299299999999996, -760.95993], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-20.93986, -3.8298599999999996, -781.25986], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [-28.91979, -3.8297899999999996, -781.02979], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [-28.91972, -3.8297199999999996, -798.6497199999999], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [-24.02965, -3.8296499999999996, -818.94965], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [-26.86958, -3.8295800000000004, -835.40958], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [-26.869510000000002, -3.8295100000000004, -854.27951], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [-19.34, -3.8299999999999996, -854.28], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [-19.33993, -3.8299299999999996, -871.1299300000001], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [-23.32986, -3.8298599999999996, -871.12986], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [-23.32979, -3.8297899999999996, -888.06979], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [-29.329720000000002, -3.8297199999999996, -888.06972], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [-28.109650000000002, -3.8296499999999996, -906.49965], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [-19.93958, -3.8295800000000004, -906.4895799999999], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [0.00049, 0.24048999999999998, -481.00951000000003], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [-9.6, 0.24, -481.01], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [-6.52993, 0.24006999999999995, -490.80993], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [-2.4698599999999997, 0.24014000000000002, -490.80985999999996], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [-4.17979, -0.28979, -464.58979], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [-2.82972, -0.28972, -458.09972], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [-1.11965, -0.2896500000000001, -435.51964999999996], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [0.20042000000000001, -0.28958000000000006, -421.05958], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [-0.71951, -0.28950999999999993, -412.44951000000003], [0, 0, 0], [2, 2, 2]);
        a.re('C23', [-1.81, -0.29000000000000004, -443.92], [0, 0, 0], [2, 2, 2]);
        a.re('C24', [-2.26993, -0.28993, -435.51993000000004], [0, 0, 0], [2, 2, 2]);
        a.re('C25', [-3.09986, -0.2898600000000001, -443.91985999999997], [0, 0, 0], [2, 2, 2]);
        a.re('C26', [-1.4697900000000002, -0.28979, -421.05979], [0, 0, 0], [2, 2, 2]);
        a.re('C27', [-1.80972, -0.28972, -427.57972], [0, 0, 0], [2, 2, 2]);
        a.re('C28', [-5.629650000000001, 0.24034999999999995, -481.00964999999997], [0, 0, 0], [2, 2, 2]);
        a.re('C29', [-5.62958, 0.24041999999999997, -485.49958], [0, 0, 0], [2, 2, 2]);
        a.re('C30', [-5.62951, 0.24048999999999998, -496.61951], [0, 0, 0], [2, 2, 2]);
        a.re('C31', [-11.68, 0.24, -496.62], [0, 0, 0], [2, 2, 2]);
        a.re('C32', [-1.3899299999999999, 0.24006999999999995, -496.61993], [0, 0, 0], [2, 2, 2]);
        a.re('C33', [-1.3898599999999999, 0.24014000000000002, -485.64986], [0, 0, 0], [2, 2, 2]);
        a.re('C34', [-10.50979, 0.24020999999999998, -485.64979], [0, 0, 0], [2, 2, 2]);
        a.re('C35', [-10.50972, 0.24027999999999994, -490.82972], [0, 0, 0], [2, 2, 2]);
        a.re('C36', [-8.35965, 0.24034999999999995, -487.96964999999994], [0, 0, 0], [2, 2, 2]);
        a.re('C37', [-8.35958, 0.24041999999999997, -477.77958], [0, 0, 0], [2, 2, 2]);
        a.re('C38', [-2.9595100000000003, 0.24048999999999998, -481.00951000000003], [0, 0, 0], [2, 2, 2]);
        a.re('C39', [-2.96, 0.24, -483.56], [0, 0, 0], [2, 2, 2]);
        a.re('C40', [-3.66993, 0.24006999999999995, -488.33993000000004], [0, 0, 0], [2, 2, 2]);
        a.re('C41', [-3.66986, 0.24014000000000002, -478.21986], [0, 0, 0], [2, 2, 2]);
        a.re('P54', [0.00028000000000000003, -1.28972, -13.36972], [0, 0, 0], [2, 2, 29.66]);
        a.re('P55', [0.00035000000000000005, -1.2396500000000001, -30.819650000000003], [0, 0, 0], [2.48, 2, 5.3]);
        a.re('E0', [-25.26958, -3.5395800000000004, -921.68958], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}