var map = {
    title: "Impossible Christmas Map",
    song: "env2",
    maker: "dododo73",
    spawn: [0, 0.5, 0],
    init: function() {

		function pup(a2, b, c, d, e, f, g, h, i, j) {
			a.og(a2,b,c,d,e,f,g,h,i,j);
		}
		a.og('ice', 0,0,0,0,0,0,2 ,0.1 ,4 ); 
		a.og('ice', 0,0,-3.929,0,0,0,0.336 ,0.1 ,4 );
		a.og('ice', 0,0,-7.775,0,0,0,2 ,0.1 ,4 );
		a.og('fire', -0.743,-0.01,-11.509,-16.839,0,0,0.536 ,0.1 ,4 );
		a.og('fire', 0.743,-0.01,-11.509,16.839,0,0,0.536 ,0.1 ,4 );
		a.og('ice', 0.743,0.07,-12.893,16.839,0,0,0.536 ,0.1 ,4 );
		a.og('ice', -0.743,0.07,-12.893,-16.839,0,0,0.536 ,0.1 ,4 );
		a.og('fire', 0.5,0.468,-17.748,162.954,-8.794,-177.316,0.536 ,0.1 ,6 );
		a.og('fire', -0.5,0.468,-17.748,-162.955,-8.794,177.316,0.536 ,0.1 ,6 );
		a.og('ice', 0,0.193,-11.72,0,5.85,0,0.526 ,0.1 ,4 );
		a.og('fire', 0.941,0.21,-8.108,0,0,0,0.526 ,0.371 ,0.389 ); //10
		a.og('fire', -0.989,0.21,-8.108,0,0,0,0.526 ,0.371 ,0.389 );
		a.og('ice', 0,0.824,-22.511,0,0,0,1.526 ,0.1 ,4 );
		a.og('ice', -1.141,0.824,-26.289,0,0,0,1.526 ,0.1 ,4 );
		a.og('ice', 1.141,0.824,-26.289,0,0,0,1.526 ,0.1 ,4 );
		a.og('ice', 0,0.824,-30.034,0,0,0,1.526 ,0.1 ,4 );
		a.og('ice', -1.099,0.921,-32.369,0,9.254,0,1 ,0.1 ,1.135 );
		a.og('ice', 1.063,0.921,-32.369,0,9.254,0,1 ,0.1 ,1.135 );
		a.og('ice', 0.046,1.1,-33.466,0,9.254,0,1.718 ,0.1 ,1.135 );
		a.og('ice', 0,1.186,-35.857,0,0,0,0.919 ,0.1 ,3.689 );
		a.og('ice', -0.865,1.186,-41.101,0,0,0,1.407 ,0.1 ,3.689 ); //20
		a.og('ice', -0.514,1.186,-38.48,-22.91,0,0,1.407 ,0.1 ,3.689 );
		a.og('ice', 0.306,1.186,-46.222,0,0,0,1.407 ,0.1 ,3.689 );
		a.og('ice', -0.293,1.186,-43.594,23.151,0,0,1.407 ,0.1 ,2.028 );
		a.og('ice', -0.437,1.186,-49.79,0,0,0,1.407 ,0.1 ,3.689 );
		a.og('ice', 0.381,1.186,-52.338,0,0,0,1.407 ,0.1 ,3.689 );
		a.og('ice', -0.277,1.186,-56.217,-11.568,0,0,1.407 ,0.1 ,5 );
		a.og('ice', 0.275,1.186,-59.377,5.996,0,0,1.407 ,0.1 ,5 );
		a.og('ice', 0.444,1.186,-64.055,0,0,0,1.407 ,0.1 ,5 );
		a.og('ice', 0.444,1.186,-70.77,0,0,0,1.876 ,0.1 ,9.328 );
		a.og('fire', -0.1,1.273,-67.789,0,0,0,0.911 ,0.539 ,0.57 ); //30
		a.og('fire', 1.032,1.273,-73.074,0,0,0,0.911 ,0.539 ,0.57 );
		a.og('ice', -0.151,1.186,-78.194,0,0,0,0.6 ,0.1 ,6.009 );
		a.og('ice', 0.735,1.186,-83.055,0,8.999,0,0.9 ,0.1 ,6.009 );
		a.og('ice', 1.748,2.112,-88.907,18.067,8.562,2.78,0.6 ,0.1 ,6.009 );
		a.og('ice', 2.817,2.24,-92.611,0,0,0,0.6 ,0.1 ,6.009 ); //35
		a.og('ice', 3.182,2.24,-96.733,0,0,0,2.067 ,0.1 ,5.379 );
		a.og('fire', 3.182,2.732,-96.733,0,0,0,2.0 ,1.0 ,0.6 ); // shrin 1
		a.og('ice', 1.741,2.24,-104.34,0,0,0,2.067 ,0.1 ,12.16 );
		a.og('fire', 1.741,2.732,-102.293,0,0,0,2.067 ,1.238 ,0.673 ); // shrin 2
		a.og('fire', 1.741,2.732,-108.716,0,0,0,2.067 ,1.238 ,0.673 ); // shrin 3
		a.og('ice', -0.25,2.24,-115.564,-19.45,0,0,2.067 ,0.1 ,12.16 ); //41
		a.og('brown', -0.25,2.706,-115.564,-19.45,0,0,0.453 ,1.088 ,3.112 ); // rotae;
		a.og('ice', -0.614,2.24,-120.94,-3.739,0,0,0.746 ,0.1 ,7.856 );
		a.og('ice', -2.764,2.24,-126.971,-3.739,0,0,0.746 ,0.1 ,12.16 );
		a.og('ice', -3.172,2.24,-130.393,-23.001,0,0,0.746 ,0.1 ,12.16 );
		a.og('ice', -5.485,2.24,-138.411,-23.001,0,0,0.746 ,0.1 ,12.16 );
		a.og('ice', -5.523,2.24,-141.929,0,0,0,0.746 ,0.1 ,12.16 );
		a.og('green', -5.713,2.24,-145.61,-21.158,6.575,0,0.746 ,0.1 ,12.16 );
		a.og('green', -5.342,2.845,-156.191,28.642,0,8.978,0.746 ,0.1 ,12.16 );
		a.og('ice', -3.782,1.767,-163.692,0,0,0,0.746 ,0.1 ,12.16 );

		a.og('green', -7.768,2.786,-154.317,0,0,8.978,0.746 ,0.1 ,7.026 );
		a.og('green', -6.482,2.553,-162.929,14,0,8.978,0.746 ,0.1 ,12.16 );
		a.og('fire', -4.596,2.249,-174.603,0,0,0,1.97 ,0.1 ,12.16 ); // EN??


		a.og_tree(0.0, 0.786, -12);
		a.og_tree(0.0, 1.486, -33.5);
		a.og_tree(-1.0, 1.486, -41);
		a.og_tree(0.6, 1.486, -46);
		a.og_tree(-0.6, 1.486, -49);
		a.og_tree(1.0, 1.486, -53);
		a.og_tree(-0.8, 1.486, -57);

		a.og_c(1.3, -63.5, -0.4);
	    a.og_c(1.3, -58, -0.6);
	    a.og_c(1.3, -54, -0.2);
	    a.og_c(1.3, -52, -0.4);
	    a.og_c(1.3, -68.5, -0.4);
	    a.og_c(1.3, -70.5, -0.8);

		a.og_end(4.596, 2.249 - 0.1, -175.603, 0);

		this.firstWidth = 2.0;
		this.secondWidth = 2.0;
		this.thirdWidth = 2.0;
		this.rotationAngle = 0.0;

	},
	post: function() {
		cc.set_monkey("speed", 0.2);
		cc.set_monkey("steer", 0.03);
		cc.refresh();
	},
    section_id: 0,
    section_update: function() {
    },
    reset: function() {
        this.section_id = 0;
		cleanup.run(false);
		this.init();
    },
    physics_update: function() {},
    render_update: function() {
    	iv(player, scene);
    }
}

function iv(box, scene) {
	if ((box.position.z > -120) && (box.position.z < -101)) {
		map.rotationAngle += 0.5 * 0.004;
		scene.getMeshByName("P42").rotation.y = Math.sin(map.rotationAngle);
	}
	if (box.position.z < - 92) {
		if (map.firstWidth > 0.4) {
			map.firstWidth -= 0.5 * 0.1;
			scene.getMeshByName("P37").position.x -= 0.5 * 0.05;
			scene.getMeshByName("P37").scaling = new BABYLON.Vector3(map.firstWidth, 1, 0.6)
		}
		if (box.position.z < - 98) {
			if (map.secondWidth > 0.4) {
				map.secondWidth -= 0.5 * 0.1;
				scene.getMeshByName("P39").position.x += 0.5 * 0.05;
				scene.getMeshByName("P39").scaling = new BABYLON.Vector3(map.secondWidth, 1, 0.6)
			}
			if (box.position.z < - 104) {
				if (map.thirdWidth > 0.4) {
					map.thirdWidth -= 0.5 * 0.1;
					scene.getMeshByName("P40").position.x -= 0.5 * 0.05;
					scene.getMeshByName("P40").scaling = new BABYLON.Vector3(map.thirdWidth, 1, 0.6)
				}
			}
		}
	}
}


