var map = {
    title: "Chase",
    song: "env2",
    maker: "Rocky707",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([0.04, 0.00018, 433.82]);
        a.p([0.19, -1.41994, -29.33], [0, 0, 0], [19.98, 1.36, 95.56], 1, 0);
        a.p([-0.38, 1.75012, -310.94], [0, 0, 0], [13.08, 15.6, 1.02], 1, 0);
        a.p([-0.38, 1.75018, -333.19], [0, 0, 0], [13.08, 15.6, 1.02], 1, 0);
        a.p([-0.38, 1.75024, -291.82], [0, 0, 0], [13.08, 15.6, 1.02], 1, 0);
        a.c([3.18, -0.3397, -94.55], true);
        a.c([-3.09, -0.33999999999999997, -104.76], true);
        a.c([4.76, -0.33994, -104.76], true);
        a.p([-5.46, 1.75012, -137.11], [0, 0, 0], [9.44, 15.6, 1.02], 1, 0);
        a.p([5.1, 1.75018, -137.11], [0, 0, 0], [9, 15.6, 1.02], 1, 0);
        a.p([-3.75, 1.75024, -159.22], [0, 0, 0], [13.08, 15.6, 1.02], 1, 0);
        a.p([-9.84, 1.7503, -1556.76], [0, 0, 0], [2.16, 15.6, 2796.42], 1, 0);
        a.p([7.31, 1.75, -1681.92], [0, 0, 0], [2.16, 15.6, 2796.42], 1, 0);
        a.p([2.89, 1.75006, -179.35], [0, 0, 0], [13.08, 15.6, 1.02], 1, 0);
        a.p([-3.3, 1.75012, -199.5], [0, 0, 0], [13.08, 15.6, 1.02], 1, 0);
        a.p([2.37, 1.75018, -225.31], [0, 0, 0], [13.08, 15.6, 1.02], 1, 0);
        a.p([9.48, 1.75024, -1556.07], [0, 0, 0], [2.16, 15.6, 2796.42], 1, 0);
        a.p([-7.9, 1.7503, -1681.92], [0, 0, 0], [2.16, 15.6, 2796.42], 1, 0);
        a.p([5.04, 1.75, -1730.18], [0, 0, 0], [2.16, 15.6, 2796.42], 1, 0);
        a.p([7.61, 1.75006, -1730.18], [0, 0, 0], [5.24, 15.6, 2796.42], 1, 0);
        a.p([-9.84, 1.75012, -1556.76], [0, 0, 0], [2.16, 15.6, 2796.42], 1, 0);
        a.p([-5.75, 1.75018, -1730.18], [0, 0, 0], [2.16, 15.6, 2796.42], 1, 0);
        a.c([1.08, -0.33976000000000006, -351.92], true);
        a.c([-1.92, -0.3397, -359.73], true);
        a.c([1.56, -0.33999999999999997, -359.73], true);
        a.c([0.22, -0.33994, -368.04], true);
        a.c([-1.01, -0.33988000000000007, -373.86], true);
        a.c([0.93, -0.33982, -384.62], true);
        a.c([-2.26, -0.33976000000000006, -395.57], true);
        a.c([0.31, -0.3397, -401.95], true);
        a.c([-1.87, -0.33999999999999997, -407.71], true);
        a.p([-7.42, 1.75006, -1730.18], [0, 0, 0], [5.24, 15.6, 2796.42], 1, 0);
        a.c([1.08, -0.33988000000000007, -112.59], true);
        a.p([-0.38, 1.75018, -423.97], [0, 0, 0], [13.08, 15.6, 3.68], 1, 0);
        a.p([-0.38, -2.10976, -420.9], [0, -1.57, 0], [13.08, 15.6, 1.02], 1, 0);
        a.c([-5.59, -0.33999999999999997, -94.55], true);
        a.c([0, -0.33994, -73.01], true);
        a.c([7.6, -0.33988000000000007, -94.55], true);
    },
    post: function() {
        a.m('P0').unfreezeWorldMatrix();
        a.m('P1').unfreezeWorldMatrix();
        a.m('P2').unfreezeWorldMatrix();
        a.m('P3').unfreezeWorldMatrix();
        a.m('C0').unfreezeWorldMatrix();
        a.m('C1').unfreezeWorldMatrix();
        a.m('C2').unfreezeWorldMatrix();
        a.m('P4').unfreezeWorldMatrix();
        a.m('P5').unfreezeWorldMatrix();
        a.m('P6').unfreezeWorldMatrix();
        a.m('P7').unfreezeWorldMatrix();
        a.m('P8').unfreezeWorldMatrix();
        a.m('P9').unfreezeWorldMatrix();
        a.m('P10').unfreezeWorldMatrix();
        a.m('P11').unfreezeWorldMatrix();
        a.m('P12').unfreezeWorldMatrix();
        a.m('P13').unfreezeWorldMatrix();
        a.m('P14').unfreezeWorldMatrix();
        a.m('P15').unfreezeWorldMatrix();
        a.m('P16').unfreezeWorldMatrix();
        a.m('P17').unfreezeWorldMatrix();
        a.m('C3').unfreezeWorldMatrix();
        a.m('C4').unfreezeWorldMatrix();
        a.m('C5').unfreezeWorldMatrix();
        a.m('C6').unfreezeWorldMatrix();
        a.m('C7').unfreezeWorldMatrix();
        a.m('C8').unfreezeWorldMatrix();
        a.m('C9').unfreezeWorldMatrix();
        a.m('C10').unfreezeWorldMatrix();
        a.m('C11').unfreezeWorldMatrix();
        a.m('P18').unfreezeWorldMatrix();
        a.m('C12').unfreezeWorldMatrix();
        a.m('P19').unfreezeWorldMatrix();
        a.m('P20').unfreezeWorldMatrix();
        a.m('C13').unfreezeWorldMatrix();
        a.m('C14').unfreezeWorldMatrix();
        a.m('C15').unfreezeWorldMatrix();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.9100000000000001) {
                    speed = default_speed * -1.0;
                    this.section_id += 1
                }
                break;
            case 1:
                a.mov('P0', 'z', 1.0);
                a.mov('P1', 'z', 2.0);
                a.rot('P1', 'x', 1.0);
                a.mov('P2', 'z', 2.0);
                a.rot('P2', 'x', 1.0);
                a.mov('P3', 'z', 2.0);
                a.rot('P3', 'x', 1.0);
                a.mov('C0', 'z', 2.0);
                a.mov('C1', 'z', 2.0);
                a.mov('C2', 'z', 2.0);
                a.mov('P4', 'z', 2.0);
                a.mov('P5', 'z', 2.0);
                a.mov('P6', 'z', 2.0);
                a.mov('P7', 'z', 2.0);
                a.mov('P8', 'z', 2.0);
                a.mov('P9', 'z', 2.0);
                a.mov('P10', 'z', 2.0);
                a.mov('P11', 'z', 2.0);
                a.mov('P12', 'z', 2.0);
                a.mov('P13', 'z', 2.0);
                a.mov('P14', 'z', 2.0);
                a.mov('P15', 'z', 2.0);
                a.mov('P16', 'z', 2.0);
                a.mov('P17', 'z', 2.0);
                a.mov('C3', 'z', 2.0);
                a.mov('C4', 'z', 2.0);
                a.mov('C5', 'z', 2.0);
                a.mov('C6', 'z', 2.0);
                a.mov('C7', 'z', 2.0);
                a.mov('C8', 'z', 2.0);
                a.mov('C9', 'z', 2.0);
                a.mov('C10', 'z', 2.0);
                a.mov('C11', 'z', 2.0);
                a.mov('P18', 'z', 2.0);
                a.mov('C12', 'z', 2.0);
                a.mov('P19', 'z', 2.0);
                a.mov('P20', 'z', 2.0);
                a.mov('C13', 'z', 2.0);
                a.mov('C14', 'z', 2.0);
                a.mov('C15', 'z', 2.0);
                if (PZ < -9.45) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.19, -1.41994, -29.33], [0, 0, 0], [19.98, 1.36, 95.56]);
        a.re('P1', [-0.38, 1.75012, -310.94], [0, 0, 0], [13.08, 15.6, 1.02]);
        a.re('P2', [-0.38, 1.75018, -333.19], [0, 0, 0], [13.08, 15.6, 1.02]);
        a.re('P3', [-0.38, 1.75024, -291.82], [0, 0, 0], [13.08, 15.6, 1.02]);
        a.re('C0', [3.18, -0.3397, -94.55], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-3.09, -0.33999999999999997, -104.76], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [4.76, -0.33994, -104.76], [0, 0, 0], [2, 2, 2]);
        a.re('P4', [-5.46, 1.75012, -137.11], [0, 0, 0], [9.44, 15.6, 1.02]);
        a.re('P5', [5.1, 1.75018, -137.11], [0, 0, 0], [9, 15.6, 1.02]);
        a.re('P6', [-3.75, 1.75024, -159.22], [0, 0, 0], [13.08, 15.6, 1.02]);
        a.re('P7', [-9.84, 1.7503, -1556.76], [0, 0, 0], [2.16, 15.6, 2796.42]);
        a.re('P8', [7.31, 1.75, -1681.92], [0, 0, 0], [2.16, 15.6, 2796.42]);
        a.re('P9', [2.89, 1.75006, -179.35], [0, 0, 0], [13.08, 15.6, 1.02]);
        a.re('P10', [-3.3, 1.75012, -199.5], [0, 0, 0], [13.08, 15.6, 1.02]);
        a.re('P11', [2.37, 1.75018, -225.31], [0, 0, 0], [13.08, 15.6, 1.02]);
        a.re('P12', [9.48, 1.75024, -1556.07], [0, 0, 0], [2.16, 15.6, 2796.42]);
        a.re('P13', [-7.9, 1.7503, -1681.92], [0, 0, 0], [2.16, 15.6, 2796.42]);
        a.re('P14', [5.04, 1.75, -1730.18], [0, 0, 0], [2.16, 15.6, 2796.42]);
        a.re('P15', [7.61, 1.75006, -1730.18], [0, 0, 0], [5.24, 15.6, 2796.42]);
        a.re('P16', [-9.84, 1.75012, -1556.76], [0, 0, 0], [2.16, 15.6, 2796.42]);
        a.re('P17', [-5.75, 1.75018, -1730.18], [0, 0, 0], [2.16, 15.6, 2796.42]);
        a.re('C3', [1.08, -0.33976000000000006, -351.92], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [-1.92, -0.3397, -359.73], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [1.56, -0.33999999999999997, -359.73], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [0.22, -0.33994, -368.04], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [-1.01, -0.33988000000000007, -373.86], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [0.93, -0.33982, -384.62], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [-2.26, -0.33976000000000006, -395.57], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [0.31, -0.3397, -401.95], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [-1.87, -0.33999999999999997, -407.71], [0, 0, 0], [2, 2, 2]);
        a.re('P18', [-7.42, 1.75006, -1730.18], [0, 0, 0], [5.24, 15.6, 2796.42]);
        a.re('C12', [1.08, -0.33988000000000007, -112.59], [0, 0, 0], [2, 2, 2]);
        a.re('P19', [-0.38, 1.75018, -423.97], [0, 0, 0], [13.08, 15.6, 3.68]);
        a.re('P20', [-0.38, -2.10976, -420.9], [0, -1.57, 0], [13.08, 15.6, 1.02]);
        a.re('C13', [-5.59, -0.33999999999999997, -94.55], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [0, -0.33994, -73.01], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [7.6, -0.33988000000000007, -94.55], [0, 0, 0], [2, 2, 2]);
    },
    physics_update: function() {},
    render_update: function() {}
}