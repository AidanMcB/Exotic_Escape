Tiger.destroy_all
TigerMovement.destroy_all

tiger1 = Tiger.create({name: "Lucky", x: 500, y: 300, img_url: "assets/tiger.png"})
tiger2 = Tiger.create({name: "Thor", x: 400, y: 200, img_url: "assets/tiger.png"})
tiger1Movements = TigerMovement.create({left: 3, down: 3, right: 3, up: 3, speed: 0.5, tiger_id: tiger1.id})
tiger2Movements = TigerMovement.create({left: 3, down: 3, right: 3, up: 3, speed: 0.5, tiger_id: tiger2.id})