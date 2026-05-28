export interface ProjectSpec {
    piecesSquare: string;
    bundlesSquare: string;
    nailsSquare: string;
    exposure: string;
    dimensions: string;
}

export interface Project {
    id: string;
    image: string;
    specs: ProjectSpec;
}


export const COVERAGE_AREAS = [
    {
        id: 1,
        name: "Naperville",
        center: { lat: 41.7508, lng: -88.1535 },
        paths: [
            { lat: 41.781495, lng: -88.205951 },
            { lat: 41.8041873, lng: -88.2034146 },
            { lat: 41.8066182, lng: -88.1845729 },
            { lat: 41.8141802, lng: -88.1831235 },
            { lat: 41.8147203, lng: -88.1755144 },
            { lat: 41.818501, lng: -88.1747897 },
            { lat: 41.818771, lng: -88.1526869 },
            { lat: 41.8055378, lng: -88.155948 },
            { lat: 41.7952734, lng: -88.155948 },
            { lat: 41.7904108, lng: -88.154861 },
            { lat: 41.7841969, lng: -88.1476141 },
            { lat: 41.7896003, lng: -88.1487012 },
            { lat: 41.8058079, lng: -88.1468895 },
            { lat: 41.806078, lng: -88.1291348 },
            { lat: 41.8174208, lng: -88.1284101 },
            { lat: 41.8171507, lng: -88.1215256 },
            { lat: 41.8106694, lng: -88.1113801 },
            { lat: 41.8166107, lng: -88.1110177 },
            { lat: 41.8171507, lng: -88.0961618 },
            { lat: 41.8233615, lng: -88.0961618 },
            { lat: 41.81337, lng: -88.0809434 },
            { lat: 41.8052677, lng: -88.0842045 },
            { lat: 41.803377, lng: -88.0896396 },
            { lat: 41.8012162, lng: -88.090002 },
            { lat: 41.7995955, lng: -88.0802188 },
            { lat: 41.7839267, lng: -88.0798564 },
            { lat: 41.781495, lng: -88.0871032 },
            { lat: 41.7747398, lng: -88.0852915 },
            { lat: 41.7769016, lng: -88.0729719 },
            { lat: 41.7506855, lng: -88.0650005 },
            { lat: 41.7393309, lng: -88.0657251 },
            { lat: 41.7244587, lng: -88.0657251 },
            { lat: 41.7125585, lng: -88.076233 },
            { lat: 41.7100172, lng: -88.0995546 },
            { lat: 41.7089531, lng: -88.1104827 },
            { lat: 41.7093078, lng: -88.1214107 },
            { lat: 41.7015000, lng: -88.1456423 },
            { lat: 41.6885545, lng: -88.1456423 },
            { lat: 41.6800921, lng: -88.1454401 },
            { lat: 41.6665596, lng: -88.1458024 },
            { lat: 41.667101, lng: -88.1679052 },
            { lat: 41.6800921, lng: -88.172978 },
            { lat: 41.6803627, lng: -88.1852976 },
            { lat: 41.6733262, lng: -88.1856599 },
            { lat: 41.6733262, lng: -88.2034146 },
            { lat: 41.7079601, lng: -88.2063133 },
            { lat: 41.7082306, lng: -88.1987042 },
            { lat: 41.7290559, lng: -88.1990665 },
            { lat: 41.7290559, lng: -88.1809495 },
            { lat: 41.7812248, lng: -88.1842106 },
            { lat: 41.781495, lng: -88.205951 }
        ]
    },
    {
        id: 2,
        name: "Evanston",
        center: { lat: 42.0451, lng: -87.6877 },
        paths: [
            { lat: 42.0711238, lng: -87.6796378 },
            { lat: 42.0609015, lng: -87.6730284 },
            { lat: 42.0594021, lng: -87.66954 },
            { lat: 42.0520408, lng: -87.6684384 },
            { lat: 42.0475419, lng: -87.6730284 },
            { lat: 42.0401792, lng: -87.6689892 },
            { lat: 42.0287246, lng: -87.6691728 },
            { lat: 42.0266789, lng: -87.6669697 },
            { lat: 42.0266789, lng: -87.6783527 },
            { lat: 42.0213598, lng: -87.6770675 },
            { lat: 42.0206778, lng: -87.7108493 }, // Punto de contacto sur
            { lat: 42.0517682, lng: -87.7101149 }, // Punto de contacto medio
            { lat: 42.0554489, lng: -87.7156228 }, // Punto compartido Skokie
            { lat: 42.0558579, lng: -87.727373 },  // Punto compartido Skokie
            { lat: 42.0625371, lng: -87.727373 },  // Punto compartido Skokie
            { lat: 42.0626734, lng: -87.7325137 }, // Punto compartido Skokie
            { lat: 42.0711238, lng: -87.7323301 }, // Punto de contacto norte
            { lat: 42.0708512, lng: -87.6884505 },
            { lat: 42.0724866, lng: -87.6882669 },
            { lat: 42.0734406, lng: -87.680923 },
            { lat: 42.0711238, lng: -87.6796378 }
        ]
    },
    {
        id: 3,
        name: "Schaumburg",
        center: { lat: 42.0334, lng: -88.0834 },
        paths: [
            { lat: 42.0507549, lng: -88.0300071 },
            { lat: 42.0252034, lng: -88.0312234 },
            { lat: 42.0165549, lng: -88.0307022 },
            { lat: 42.0164903, lng: -88.0611092 },
            { lat: 42.0033216, lng: -88.0607617 },
            { lat: 42.0033216, lng: -88.08891 },
            { lat: 41.9860174, lng: -88.0878675 },
            { lat: 41.9852425, lng: -88.1330437 },
            { lat: 42.0040963, lng: -88.1337387 },
            { lat: 42.0035799, lng: -88.1278311 },
            { lat: 42.0182976, lng: -88.1281786 },
            { lat: 42.0182976, lng: -88.144859 },
            { lat: 42.0239772, lng: -88.144164 },
            { lat: 42.0229446, lng: -88.1601494 },
            { lat: 42.0337862, lng: -88.1594544 },
            { lat: 42.0343024, lng: -88.1386039 },
            { lat: 42.0464325, lng: -88.1386039 },
            { lat: 42.0469486, lng: -88.1222709 },
            { lat: 42.0430776, lng: -88.1226184 },
            { lat: 42.0428195, lng: -88.1167108 },
            { lat: 42.0433357, lng: -88.0989878 },
            { lat: 42.0275912, lng: -88.0979452 },
            { lat: 42.0273331, lng: -88.08891 },
            { lat: 42.03327, lng: -88.088215 },
            { lat: 42.0337862, lng: -88.0788322 },
            { lat: 42.0415291, lng: -88.0788322 },
            { lat: 42.0420453, lng: -88.069102 },
            { lat: 42.0376578, lng: -88.0684069 },
            { lat: 42.0379159, lng: -88.0618043 },
            { lat: 42.0469486, lng: -88.0611092 },
            { lat: 42.0567541, lng: -88.0670169 },
            { lat: 42.0572701, lng: -88.088215 },
            { lat: 42.0484969, lng: -88.0885625 },
            { lat: 42.0539158, lng: -88.1003778 },
            { lat: 42.0474647, lng: -88.0989878 },
            { lat: 42.0472067, lng: -88.1076755 },
            { lat: 42.0714595, lng: -88.108718 },
            { lat: 42.070856, lng: -88.1014203 },
            { lat: 42.0595922, lng: -88.1014203 },
            { lat: 42.0621723, lng: -88.08891 },
            { lat: 42.06759, lng: -88.0892575 },
            { lat: 42.0843562, lng: -88.08891 },
            { lat: 42.0843562, lng: -88.0433863 },
            { lat: 42.0663001, lng: -88.0291384 },
            { lat: 42.0595922, lng: -88.0454713 },
            { lat: 42.0585602, lng: -88.0294859 },
            { lat: 42.0507549, lng: -88.0300071 }
        ]
    },
    {
        id: 4,
        name: "Des Plaines",
        center: { lat: 42.0400, lng: -87.8900 },
        paths: [
            { lat: 42.0882923, lng: -87.9116268 },
            { lat: 42.0883727, lng: -87.9076225 },
            { lat: 42.08484, lng: -87.9054908 },
            { lat: 42.0799986, lng: -87.9058341 },
            { lat: 42.0792342, lng: -87.8907279 },
            { lat: 42.0647077, lng: -87.8869514 },
            { lat: 42.0647077, lng: -87.875965 },
            { lat: 42.0560413, lng: -87.876995 },
            { lat: 42.0552765, lng: -87.8818015 },
            { lat: 42.0514526, lng: -87.8818015 },
            { lat: 42.0519625, lng: -87.8670386 },
            { lat: 42.0486483, lng: -87.8666953 },
            { lat: 42.0481384, lng: -87.8594855 },
            { lat: 42.045334, lng: -87.8697852 },
            { lat: 42.0389597, lng: -87.8646354 },
            { lat: 42.0394697, lng: -87.8598289 },
            { lat: 42.0282496, lng: -87.8594855 },
            { lat: 42.0273395, lng: -87.8660087 },
            { lat: 42.0200883, lng: -87.866352 },
            { lat: 42.0078443, lng: -87.8701285 },
            { lat: 41.9958531, lng: -87.8666953 },
            { lat: 41.9933015, lng: -87.8666953 },
            { lat: 41.9922809, lng: -87.8790549 },
            { lat: 41.997384, lng: -87.8907279 },
            { lat: 42.0101402, lng: -87.8924445 },
            { lat: 42.0106504, lng: -87.8986243 },
            { lat: 42.0017214, lng: -87.8989677 },
            { lat: 42.000956, lng: -87.9260901 },
            { lat: 42.0086096, lng: -87.9274634 },
            { lat: 42.0080994, lng: -87.9192237 },
            { lat: 42.0114157, lng: -87.919567 },
            { lat: 42.0160072, lng: -87.9466895 },
            { lat: 42.0200883, lng: -87.9411963 },
            { lat: 42.0471187, lng: -87.9405097 },
            { lat: 42.0496681, lng: -87.921627 },
            { lat: 42.0675113, lng: -87.9226569 },
            { lat: 42.0677662, lng: -87.9109839 },
            { lat: 42.0882923, lng: -87.9116268 }
        ]
    },
    {
        id: 5,
        name: "Arlington Heights",
        center: { lat: 42.0884, lng: -87.9806 },
        paths: [
            { lat: 42.1545466, lng: -88.0108857 },
            { lat: 42.1540212, lng: -87.9853726 },
            { lat: 42.1459647, lng: -87.9849001 },
            { lat: 42.146315, lng: -87.9948219 },
            { lat: 42.1428119, lng: -87.9952943 },
            { lat: 42.142987, lng: -87.9849001 },
            { lat: 42.1407099, lng: -87.9849001 },
            { lat: 42.1405347, lng: -87.9908059 },
            { lat: 42.1323014, lng: -87.9910421 },
            { lat: 42.1323014, lng: -87.9860813 },
            { lat: 42.1354547, lng: -87.985845 },
            { lat: 42.1356299, lng: -87.9806479 },
            { lat: 42.1275711, lng: -87.9804117 },
            { lat: 42.1277463, lng: -87.9709623 },
            { lat: 42.1349292, lng: -87.9707261 },
            { lat: 42.1349292, lng: -87.9667101 },
            { lat: 42.1328269, lng: -87.9667101 },
            { lat: 42.1330021, lng: -87.9600956 },
            { lat: 42.1245925, lng: -87.9593869 },
            { lat: 42.1245925, lng: -87.9556072 },
            { lat: 42.1247677, lng: -87.955371 },
            { lat: 42.1188103, lng: -87.955371 },
            { lat: 42.1184598, lng: -87.9461579 },
            { lat: 42.1102236, lng: -87.9463941 },
            { lat: 42.1098731, lng: -87.9504101 },
            { lat: 42.1060174, lng: -87.9504101 },
            { lat: 42.1051411, lng: -87.9582058 },
            { lat: 42.1005841, lng: -87.9579695 },
            { lat: 42.1007593, lng: -87.9626942 },
            { lat: 42.1051411, lng: -87.9693087 },
            { lat: 42.098656, lng: -87.9622217 },
            { lat: 42.0951502, lng: -87.9622217 },
            { lat: 42.0949749, lng: -87.9525362 },
            { lat: 42.0879628, lng: -87.9454492 },
            { lat: 42.0809499, lng: -87.9454492 },
            { lat: 42.0807746, lng: -87.9504101 },
            { lat: 42.0728842, lng: -87.9492289 },
            { lat: 42.0725335, lng: -87.9636391 },
            { lat: 42.0667465, lng: -87.9636391 },
            { lat: 42.0667465, lng: -87.9593869 },
            { lat: 42.062362, lng: -87.9603319 },
            { lat: 42.0621867, lng: -87.9693087 },
            { lat: 42.0558725, lng: -87.9695449 },
            { lat: 42.0490315, lng: -87.9681275 },
            { lat: 42.0328908, lng: -87.9693087 },
            { lat: 42.0453476, lng: -87.9919871 },
            { lat: 42.0497332, lng: -87.9910421 },
            { lat: 42.0565741, lng: -88.0004915 },
            { lat: 42.0688509, lng: -88.0009639 },
            { lat: 42.0695523, lng: -87.9976567 },
            { lat: 42.0758651, lng: -87.9962393 },
            { lat: 42.0790213, lng: -87.9997828 },
            { lat: 42.0883134, lng: -88.0002552 },
            { lat: 42.0883134, lng: -88.0248235 },
            { lat: 42.0972537, lng: -88.0252959 },
            { lat: 42.1011099, lng: -88.0186814 },
            { lat: 42.0925208, lng: -88.0019089 },
            { lat: 42.1109246, lng: -88.0028538 },
            { lat: 42.1291479, lng: -88.0049799 },
            { lat: 42.1245925, lng: -87.9988378 },
            { lat: 42.1296735, lng: -87.9983654 },
            { lat: 42.1291479, lng: -87.9945856 },
            { lat: 42.1326517, lng: -87.9945856 },
            { lat: 42.1330021, lng: -88.0047437 },
            { lat: 42.1426367, lng: -88.0056886 },
            { lat: 42.1503433, lng: -88.0056886 },
            { lat: 42.1515473, lng: -88.0120986 },
            { lat: 42.1512126, lng: -88.0073129 },
            { lat: 42.1523171, lng: -88.0074483 },
            { lat: 42.1531539, lng: -88.0108344 },
            { lat: 42.1545466, lng: -88.0108857 }
        ]
    },
    {
        id: 6, // Ajusta el ID según tu secuencia
        name: "Orland Park",
        center: { lat: 41.6042, lng: -87.8532 },
        paths: [
            { lat: 41.6526619, lng: -87.8394067 },
            { lat: 41.6525212, lng: -87.8580485 },
            { lat: 41.6473152, lng: -87.8584251 },
            { lat: 41.6446417, lng: -87.8546591 },
            { lat: 41.6385908, lng: -87.8542825 },
            { lat: 41.6381686, lng: -87.8772551 },
            { lat: 41.6340873, lng: -87.8772551 },
            { lat: 41.6335244, lng: -87.884034 },
            { lat: 41.63845, lng: -87.8842223 },
            { lat: 41.6412645, lng: -87.8870468 },
            { lat: 41.6418274, lng: -87.8964618 },
            { lat: 41.6414052, lng: -87.9006044 },
            { lat: 41.6374649, lng: -87.9004161 },
            { lat: 41.6381686, lng: -87.9041821 },
            { lat: 41.636902, lng: -87.9083247 },
            { lat: 41.6349318, lng: -87.908513 },
            { lat: 41.6338059, lng: -87.9119024 },
            { lat: 41.6294429, lng: -87.912279 },
            { lat: 41.6298651, lng: -87.8983448 },
            { lat: 41.6224052, lng: -87.8974033 },
            { lat: 41.6226867, lng: -87.9079481 },
            { lat: 41.6205752, lng: -87.9117141 },
            { lat: 41.6081867, lng: -87.9109609 },
            { lat: 41.6077643, lng: -87.8945788 },
            { lat: 41.6000202, lng: -87.8947671 },
            { lat: 41.596359, lng: -87.9043704 },
            { lat: 41.5998793, lng: -87.9081364 },
            { lat: 41.5998793, lng: -87.9107726 },
            { lat: 41.5955141, lng: -87.9107726 },
            { lat: 41.593965, lng: -87.904747 },
            { lat: 41.5925568, lng: -87.9098311 },
            { lat: 41.5611587, lng: -87.9093493 },
            { lat: 41.5630649, lng: -87.9053864 },
            { lat: 41.5588289, lng: -87.9068017 },
            { lat: 41.5548044, lng: -87.9053864 },
            { lat: 41.5524966, lng: -87.9049365 },
            { lat: 41.5522064, lng: -87.8905874 },
            { lat: 41.5527869, lng: -87.8521938 },
            { lat: 41.5623634, lng: -87.8529694 },
            { lat: 41.5632339, lng: -87.862277 },
            { lat: 41.5597517, lng: -87.8719723 },
            { lat: 41.5873136, lng: -87.8731358 },
            { lat: 41.5867335, lng: -87.8479279 },
            { lat: 41.6023952, lng: -87.8483157 },
            { lat: 41.6027758, lng: -87.7940939 },
            { lat: 41.6171421, lng: -87.7953335 },
            { lat: 41.6168332, lng: -87.8170273 },
            { lat: 41.6313508, lng: -87.8170273 },
            { lat: 41.6367555, lng: -87.8141348 },
            { lat: 41.6423141, lng: -87.814548 },
            { lat: 41.646174, lng: -87.8174405 },
            { lat: 41.646174, lng: -87.8360351 },
            { lat: 41.6526619, lng: -87.8394067 }
        ]
    },
    {
        id: 7,
        name: "Bolingbrook",
        center: { lat: 41.7011, lng: -88.0900 },
        paths: [
            { lat: 41.7284018, lng: -88.0508182 },
            { lat: 41.7284018, lng: -88.0456958 },
            { lat: 41.7281895, lng: -88.0345973 },
            { lat: 41.7055939, lng: -88.0316132 },
            { lat: 41.6983542, lng: -88.0428614 },
            { lat: 41.6940099, lng: -88.0335525 },
            { lat: 41.6887964, lng: -88.0335525 },
            { lat: 41.6887964, lng: -88.047128 },
            { lat: 41.6802159, lng: -88.0615442 },
            { lat: 41.6713437, lng: -88.0757981 },
            { lat: 41.6692143, lng: -88.0803119 },
            { lat: 41.6626479, lng: -88.0819748 },
            { lat: 41.6599857, lng: -88.090052 },
            { lat: 41.661583, lng: -88.1062065 },
            { lat: 41.6546609, lng: -88.1076319 },
            { lat: 41.6535959, lng: -88.1197477 },
            { lat: 41.6598082, lng: -88.120698 },
            { lat: 41.6612281, lng: -88.1142837 },
            { lat: 41.6661974, lng: -88.1178472 },
            { lat: 41.6622929, lng: -88.131626 },
            { lat: 41.643885, lng: -88.140605 },
            { lat: 41.6346091, lng: -88.1460352 },
            { lat: 41.632, lng: -88.1631015 },
            { lat: 41.6444647, lng: -88.1623258 },
            { lat: 41.6456241, lng: -88.1495261 },
            { lat: 41.6563474, lng: -88.1518533 },
            { lat: 41.667101, lng: -88.1679052 },
            { lat: 41.6665596, lng: -88.1458024 },
            { lat: 41.6800921, lng: -88.1454401 },
            { lat: 41.6885545, lng: -88.1456423 },
            { lat: 41.7015000, lng: -88.1456423 },
            { lat: 41.7093078, lng: -88.1214107 },
            { lat: 41.7089531, lng: -88.1104827 },
            { lat: 41.7100172, lng: -88.0995546 },
            { lat: 41.7274741, lng: -88.0981122 },
            { lat: 41.7280833, lng: -88.0646202 },
            { lat: 41.7354101, lng: -88.0641934 },
            { lat: 41.7354101, lng: -88.0575058 },
            { lat: 41.7279771, lng: -88.0575058 },
            { lat: 41.7284018, lng: -88.0508182 }
        ]
    },
    {
        id: 8, // Ajusta según tu índice actual
        name: "Downers Grove",
        center: { lat: 41.7859, lng: -88.0198 },
        paths: [
            { lat: 41.8315227, lng: -88.0550802 },
            { lat: 41.8333671, lng: -88.0342162 },
            { lat: 41.8375827, lng: -88.0345698 },
            { lat: 41.8373193, lng: -88.0108768 },
            { lat: 41.8325767, lng: -88.0108768 },
            { lat: 41.8267797, lng: -88.0094623 },
            { lat: 41.8312592, lng: -88.0076942 },
            { lat: 41.8317862, lng: -87.9970853 },
            { lat: 41.8209822, lng: -87.997439 },
            { lat: 41.819401, lng: -88.0013289 },
            { lat: 41.8207187, lng: -88.0069869 },
            { lat: 41.8162384, lng: -88.0080478 },
            { lat: 41.812285, lng: -88.005926 },
            { lat: 41.8114943, lng: -87.9893055 },
            { lat: 41.7988415, lng: -87.9896591 },
            { lat: 41.7964688, lng: -87.9956708 },
            { lat: 41.7938324, lng: -87.9960244 },
            { lat: 41.7940961, lng: -87.9864765 },
            { lat: 41.7853952, lng: -87.9868301 },
            { lat: 41.7853952, lng: -87.9910737 },
            { lat: 41.7835494, lng: -87.9910737 },
            { lat: 41.7824946, lng: -87.9960244 },
            { lat: 41.7648248, lng: -87.9949636 },
            { lat: 41.764561, lng: -87.9893055 },
            { lat: 41.7616595, lng: -87.9900128 },
            { lat: 41.7616595, lng: -87.9956708 },
            { lat: 41.751899, lng: -87.9949636 },
            { lat: 41.7516351, lng: -87.9875374 },
            { lat: 41.7468862, lng: -87.9893055 },
            { lat: 41.7429285, lng: -87.9924882 },
            { lat: 41.7439839, lng: -87.9970853 },
            { lat: 41.7508437, lng: -88.0009752 },
            { lat: 41.7505798, lng: -88.02679 },
            { lat: 41.7577027, lng: -88.0271437 },
            { lat: 41.7577027, lng: -88.0324481 },
            { lat: 41.7661436, lng: -88.0324481 },
            { lat: 41.7661436, lng: -88.0398743 },
            { lat: 41.7682536, lng: -88.0409351 },
            { lat: 41.7690449, lng: -88.0370452 },
            { lat: 41.7727372, lng: -88.0366916 },
            { lat: 41.7727372, lng: -88.0427033 },
            { lat: 41.7740559, lng: -88.044825 },
            { lat: 41.7822309, lng: -88.0349235 },
            { lat: 41.7751108, lng: -88.0356307 },
            { lat: 41.7751108, lng: -88.0328017 },
            { lat: 41.775902, lng: -88.0246683 },
            { lat: 41.7814398, lng: -88.018303 },
            { lat: 41.7856589, lng: -88.0221929 },
            { lat: 41.7893503, lng: -88.0200711 },
            { lat: 41.7975234, lng: -88.023961 },
            { lat: 41.7867136, lng: -88.0257292 },
            { lat: 41.7840768, lng: -88.0349235 },
            { lat: 41.7922505, lng: -88.0402279 },
            { lat: 41.7888229, lng: -88.0483613 },
            { lat: 41.7846041, lng: -88.0504831 },
            { lat: 41.7856589, lng: -88.0547266 },
            { lat: 41.7940961, lng: -88.0557875 },
            { lat: 41.803323, lng: -88.0550802 },
            { lat: 41.8107036, lng: -88.0508367 },
            { lat: 41.812285, lng: -88.0444714 },
            { lat: 41.8099128, lng: -88.0395206 },
            { lat: 41.8136028, lng: -88.0331553 },
            { lat: 41.8162384, lng: -88.0366916 },
            { lat: 41.819401, lng: -88.0430569 },
            { lat: 41.8265162, lng: -88.0504831 },
            { lat: 41.8267797, lng: -88.0540194 },
            { lat: 41.8315227, lng: -88.0550802 }
        ]
    },
    {
        id: 9, // Sigue la secuencia de tu array de sectores
        name: "Elmhurst",
        center: { lat: 41.8990, lng: -87.9403 },
        paths: [
            { lat: 41.9178845, lng: -87.9209273 },
            { lat: 41.9178845, lng: -87.9275736 },
            { lat: 41.9217132, lng: -87.9275736 },
            { lat: 41.9220323, lng: -87.924572 },
            { lat: 41.924106, lng: -87.9235 },
            { lat: 41.924251, lng: -87.9192121 },
            { lat: 41.9312839, lng: -87.9198553 },
            { lat: 41.9316029, lng: -87.9282168 },
            { lat: 41.9279344, lng: -87.9282168 },
            { lat: 41.9268178, lng: -87.9363639 },
            { lat: 41.9293699, lng: -87.9333623 },
            { lat: 41.9295294, lng: -87.9382934 },
            { lat: 41.9319219, lng: -87.9382934 },
            { lat: 41.9306459, lng: -87.9670227 },
            { lat: 41.9130983, lng: -87.9668083 },
            { lat: 41.9052801, lng: -87.9653075 },
            { lat: 41.903844, lng: -87.9659507 },
            { lat: 41.8988972, lng: -87.9648787 },
            { lat: 41.8984185, lng: -87.9691666 },
            { lat: 41.8898004, lng: -87.969381 },
            { lat: 41.8896408, lng: -87.9614483 },
            { lat: 41.885491, lng: -87.9597332 },
            { lat: 41.8792657, lng: -87.9586612 },
            { lat: 41.8770309, lng: -87.9552308 },
            { lat: 41.8752748, lng: -87.958018 },
            { lat: 41.8739977, lng: -87.9620915 },
            { lat: 41.8688889, lng: -87.9616627 },
            { lat: 41.8642587, lng: -87.9603764 },
            { lat: 41.862183, lng: -87.9595188 },
            { lat: 41.8605863, lng: -87.9588756 },
            { lat: 41.8607459, lng: -87.941295 },
            { lat: 41.8607459, lng: -87.9340055 },
            { lat: 41.8593088, lng: -87.9322903 },
            { lat: 41.8588298, lng: -87.9284312 },
            { lat: 41.862183, lng: -87.9247864 },
            { lat: 41.8653764, lng: -87.9290744 },
            { lat: 41.8656957, lng: -87.9322903 },
            { lat: 41.8633007, lng: -87.9355063 },
            { lat: 41.8640991, lng: -87.9376502 },
            { lat: 41.8671327, lng: -87.9374358 },
            { lat: 41.8696872, lng: -87.9303607 },
            { lat: 41.8706451, lng: -87.9237144 },
            { lat: 41.8693679, lng: -87.9170681 },
            { lat: 41.8739977, lng: -87.9174969 },
            { lat: 41.876073, lng: -87.9196409 },
            { lat: 41.9178845, lng: -87.9209273 }
        ]
    },
    {
        id: 10,
        name: "Skokie",
        center: { lat: 42.0347, lng: -87.7416 },
        paths: [
            { lat: 42.0524201, lng: -87.7101149 }, // Punto de contacto ajustado
            { lat: 42.0552856, lng: -87.7156228 }, // Punto de contacto ajustado
            { lat: 42.0551264, lng: -87.727373 },  // Punto de contacto ajustado
            { lat: 42.0627671, lng: -87.727373 },  // Punto de contacto ajustado
            { lat: 42.0629263, lng: -87.7325137 }, // Punto de contacto ajustado
            { lat: 42.0657913, lng: -87.7323301 }, // Punto de contacto ajustado
            { lat: 42.0651546, lng: -87.7598386 },
            { lat: 42.0622896, lng: -87.758981 },
            { lat: 42.0626079, lng: -87.7701297 },
            { lat: 42.0606978, lng: -87.7690577 },
            { lat: 42.0605387, lng: -87.7636977 },
            { lat: 42.0409569, lng: -87.7641265 },
            { lat: 42.0368169, lng: -87.7658417 },
            { lat: 42.0352246, lng: -87.7660561 },
            { lat: 42.0342691, lng: -87.7626257 },
            { lat: 42.0229619, lng: -87.7628401 },
            { lat: 42.0228026, lng: -87.7660561 },
            { lat: 42.0261472, lng: -87.7675569 },
            { lat: 42.0261472, lng: -87.7806351 },
            { lat: 42.0191393, lng: -87.7772048 },
            { lat: 42.0188207, lng: -87.7664849 },
            { lat: 42.0097411, lng: -87.7666993 },
            { lat: 42.0099004, lng: -87.7624114 },
            { lat: 42.0043245, lng: -87.7626257 },
            { lat: 42.0046431, lng: -87.7486899 },
            { lat: 42.0148386, lng: -87.7484755 },
            { lat: 42.0148386, lng: -87.7216759 },
            { lat: 42.011812, lng: -87.7218903 },
            { lat: 42.0124492, lng: -87.7108493 }, // Sincronizado con Evanston sur
            { lat: 42.0344283, lng: -87.7108493 }, // Sincronizado con Evanston sur
            { lat: 42.0360207, lng: -87.7101149 }, // Sincronizado con Evanston norte
            { lat: 42.0524201, lng: -87.7101149 }  // Cerrado perfecto
        ]
    },
    {
        id: 11, // Sigue la secuencia de tus sectores
        name: "Northbrook",
        center: { lat: 42.1275, lng: -87.8445 },
        paths: [
            { lat: 42.1527225, lng: -87.7989411 },
            { lat: 42.1525889, lng: -87.8241785 },
            { lat: 42.1492477, lng: -87.8241785 },
            { lat: 42.1492477, lng: -87.8185902 },
            { lat: 42.1451044, lng: -87.8187705 },
            { lat: 42.145639, lng: -87.813723 },
            { lat: 42.1444361, lng: -87.8135427 },
            { lat: 42.1432332, lng: -87.8283246 },
            { lat: 42.1380201, lng: -87.8250798 },
            { lat: 42.1382874, lng: -87.8348143 },
            { lat: 42.1396242, lng: -87.834634 },
            { lat: 42.1408272, lng: -87.837338 },
            { lat: 42.1443025, lng: -87.837338 },
            { lat: 42.1444361, lng: -87.8349945 },
            { lat: 42.1467083, lng: -87.8351748 },
            { lat: 42.149114, lng: -87.8414841 },
            { lat: 42.1499159, lng: -87.8735717 },
            { lat: 42.1520543, lng: -87.8750138 },
            { lat: 42.1523216, lng: -87.877177 },
            { lat: 42.1508515, lng: -87.8775376 },
            { lat: 42.1524552, lng: -87.8782586 },
            { lat: 42.1529898, lng: -87.8930405 },
            { lat: 42.1449707, lng: -87.8934011 },
            { lat: 42.1448371, lng: -87.8831259 },
            { lat: 42.1404262, lng: -87.8867312 },
            { lat: 42.1313361, lng: -87.887272 },
            { lat: 42.1273253, lng: -87.8869115 },
            { lat: 42.123448, lng: -87.8860101 },
            { lat: 42.1235817, lng: -87.8784389 },
            { lat: 42.1251861, lng: -87.8775376 },
            { lat: 42.1267905, lng: -87.8789797 },
            { lat: 42.1275927, lng: -87.8786192 },
            { lat: 42.1277264, lng: -87.869065 },
            { lat: 42.1253198, lng: -87.8685242 },
            { lat: 42.1253198, lng: -87.8625754 },
            { lat: 42.120239, lng: -87.8625754 },
            { lat: 42.1195705, lng: -87.8620346 },
            { lat: 42.1175647, lng: -87.8623951 },
            { lat: 42.116495, lng: -87.8640175 },
            { lat: 42.1166287, lng: -87.8660005 },
            { lat: 42.1132857, lng: -87.8661807 },
            { lat: 42.1119484, lng: -87.8665413 },
            { lat: 42.1106111, lng: -87.8688847 },
            { lat: 42.106599, lng: -87.8679834 },
            { lat: 42.1057966, lng: -87.8647386 },
            { lat: 42.1056628, lng: -87.8537423 },
            { lat: 42.1056628, lng: -87.8488751 },
            { lat: 42.1067327, lng: -87.8488751 },
            { lat: 42.1067327, lng: -87.8470724 },
            { lat: 42.1024529, lng: -87.8470724 },
            { lat: 42.1023192, lng: -87.8452698 },
            { lat: 42.1029879, lng: -87.84545 },
            { lat: 42.1028542, lng: -87.8351748 },
            { lat: 42.1020517, lng: -87.8351748 },
            { lat: 42.1020517, lng: -87.8315695 },
            { lat: 42.1080701, lng: -87.8313892 },
            { lat: 42.1074014, lng: -87.8297668 },
            { lat: 42.1057966, lng: -87.8297668 },
            { lat: 42.1049941, lng: -87.7984003 },
            { lat: 42.1099424, lng: -87.8011043 },
            { lat: 42.1195705, lng: -87.8016451 },
            { lat: 42.1199716, lng: -87.7911896 },
            { lat: 42.1189019, lng: -87.7845197 },
            { lat: 42.1210413, lng: -87.7832579 },
            { lat: 42.1218435, lng: -87.7796525 },
            { lat: 42.1255872, lng: -87.7827171 },
            { lat: 42.1254535, lng: -87.7856013 },
            { lat: 42.1275927, lng: -87.7875843 },
            { lat: 42.1277264, lng: -87.7843395 },
            { lat: 42.1342771, lng: -87.7856013 },
            { lat: 42.1396242, lng: -87.7886659 },
            { lat: 42.1437678, lng: -87.7908291 },
            { lat: 42.1455054, lng: -87.7920909 },
            { lat: 42.146441, lng: -87.7946147 },
            { lat: 42.1527225, lng: -87.7989411 } // Polígono cerrado
        ]
    },
    {
        id: 12,
        name: "Tinley Park",
        center: { lat: 41.5734, lng: -87.7845 },
        paths: [
            // --- BORDE NORTE ---
            { lat: 41.6035, lng: -87.7915 }, // Esquina superior izquierda
            { lat: 41.6035, lng: -87.7550 }, // Línea recta norte
            { lat: 41.5940, lng: -87.7550 }, // Pequeño quiebre hacia el sur
            { lat: 41.5940, lng: -87.7340 }, // Extensión noreste (hacia Oak Forest)

            // --- BORDE ESTE ---
            { lat: 41.5865, lng: -87.7340 }, // Bajada este superior
            { lat: 41.5865, lng: -87.7510 }, // Entrada hacia Harlem Ave
            { lat: 41.5685, lng: -87.7510 }, // Bajada por Harlem Ave
            { lat: 41.5685, lng: -87.7340 }, // Saliente este (debajo de la diagonal ferroviaria)
            { lat: 41.5590, lng: -87.7340 }, // Esquina este media
            { lat: 41.5590, lng: -87.7420 }, // Quiebre hacia Bartel Grassland
            { lat: 41.5510, lng: -87.7420 }, // Bajada bordeando la reserva

            // --- BORDE SURESTE Y AUTOPISTA (I-80) ---
            { lat: 41.5510, lng: -87.7515 }, // Ajuste sobre la curva de la reserva
            { lat: 41.5430, lng: -87.7515 }, // Bajada hacia el área industrial sur
            { lat: 41.5430, lng: -87.7610 }, // Línea horizontal sobre el tramo de la I-80
            { lat: 41.5360, lng: -87.7610 }, // Saliente máximo hacia el sur (base inferior derecha)
            { lat: 41.5360, lng: -87.7700 }, // Quiebre horizontal inferior
            { lat: 41.5280, lng: -87.7700 }, // Muesca extrema sur
            { lat: 41.5280, lng: -87.7830 }, // Base sur izquierda
            { lat: 41.5360, lng: -87.7830 }, // Subida regresando hacia el norte

            // --- BORDE SUROESTE ---
            { lat: 41.5360, lng: -87.7950 }, // Conexión con zona residencial suroeste
            { lat: 41.5450, lng: -87.7950 }, // Escalón residencial
            { lat: 41.5450, lng: -87.8210 }, // Punta extrema inferior izquierda (límite sur de US 45)

            // --- BORDE OESTE (Límite con Orland Hills / US 45) ---
            { lat: 41.5560, lng: -87.8210 }, // Subida por el lateral izquierdo
            { lat: 41.5560, lng: -87.8080 }, // Entrada horizontal (esquina inferior de Orland Hills)
            { lat: 41.5645, lng: -87.8080 }, // Subida bordeando Orland Hills
            { lat: 41.5645, lng: -87.8170 }, // Salida hacia la izquierda envolviendo la comunidad vecina
            { lat: 41.5770, lng: -87.8170 }, // Subida recta oeste
            { lat: 41.5770, lng: -87.7925 }, // Entrada profunda hacia el centro por la avenida media
            { lat: 41.5900, lng: -87.7925 }, // Subida interna paralela
            { lat: 41.5900, lng: -87.7915 }, // Último ajuste de cuadrícula antes del cierre
            { lat: 41.6035, lng: -87.7915 }  // Cierre del polígono en el origen norte
        ]
    },
    {
        id: 13,
        name: "St. Charles",
        center: { lat: 41.9140, lng: -88.3090 },
        paths: [
            // --- EXTREMO NORTE (Eje del Fox River) ---
            { lat: 41.9560, lng: -88.3150 }, // Punta superior izquierda del "brazo" norte
            { lat: 41.9560, lng: -88.3000 }, // Esquina superior derecha del brazo norte
            { lat: 41.9400, lng: -88.3000 }, // Bajada este del brazo norte
            { lat: 41.9360, lng: -88.2730 }, // Extensión noreste (hacia Wayne)
            { lat: 41.9210, lng: -88.2730 }, // Bajada este superior

            // --- BORDE ESTE (Bordeando el DuPage County Airport) ---
            { lat: 41.9210, lng: -88.2530 }, // Saliente máximo al noreste
            { lat: 41.8980, lng: -88.2530 }, // Bajada por el límite este superior
            { lat: 41.8980, lng: -88.2430 }, // Escalón este (zona comercial norte de la IL-64)
            { lat: 41.8910, lng: -88.2430 }, // Cruce de la IL-64 (North Ave)
            { lat: 41.8910, lng: -88.2310 }, // Extensión máxima este junto al aeropuerto
            { lat: 41.8840, lng: -88.2310 }, // Esquina sureste del sector aeropuerto
            { lat: 41.8840, lng: -88.2500 }, // Regreso horizontal hacia el oeste
            { lat: 41.8740, lng: -88.2500 }, // Bajada sur del límite este (Kirk Road)

            // --- BORDE SUR ---
            { lat: 41.8740, lng: -88.2830 }, // Línea horizontal sur hacia el río
            { lat: 41.8680, lng: -88.2830 }, // Pequeño ajuste sur inferior
            { lat: 41.8680, lng: -88.3300 }, // Base sur larga cruzando la IL-38
            { lat: 41.8780, lng: -88.3300 }, // Subida lateral sur-oeste
            { lat: 41.8780, lng: -88.3420 }, // Ajuste horizontal interno

            // --- BORDE OESTE (Extensión hacia Campton Hills) ---
            { lat: 41.8780, lng: -88.3680 }, // Extensión máxima hacia el oeste (zona residencial baja)
            { lat: 41.8950, lng: -88.3680 }, // Esquina inferior izquierda del mapa
            { lat: 41.8950, lng: -88.3420 }, // Retorno horizontal oeste
            { lat: 41.9050, lng: -88.3420 }, // Escalón subiendo por Randall Road
            { lat: 41.9050, lng: -88.3240 }, // Quiebre hacia el centro de la ciudad
            { lat: 41.9170, lng: -88.3240 }, // Subida central oeste

            // --- BORDE NOROESTE (Regreso al brazo del norte) ---
            { lat: 41.9170, lng: -88.3150 }, // Ajuste horizontal previo al eje norte
            { lat: 41.9330, lng: -88.3150 }, // Subida vertical izquierda conectando con la base norte
            { lat: 41.9330, lng: -88.3240 }, // Pequeño saliente residencial a la izquierda
            { lat: 41.9420, lng: -88.3240 }, // Subida final del lateral izquierdo
            { lat: 41.9420, lng: -88.3150 }, // Conexión final con el brazo del norte
            { lat: 41.9560, lng: -88.3150 }  // Cierre del polígono en el punto inicial
        ]
    },
    {
        id: 14,
        name: "Romeoville",
        center: { lat: 41.6475, lng: -88.0895 },
        paths: [
            // --- SECTOR NORTE (Límite con Bolingbrook / Cruce IL-53) ---
            { lat: 41.6730, lng: -88.1150 }, // Esquina superior izquierda (Norte-Oeste)
            { lat: 41.6730, lng: -88.1020 }, // Quiebre horizontal norte
            { lat: 41.6520, lng: -88.1020 }, // Bajada interna
            { lat: 41.6520, lng: -88.0780 }, // Línea horizontal norte media
            { lat: 41.6600, lng: -88.0780 }, // Saliente norte junto a la IL-53
            { lat: 41.6600, lng: -88.0580 }, // Esquina superior norte-centro
            { lat: 41.6710, lng: -88.0580 }, // Espolón que sube al norte cerca de la autopista
            { lat: 41.6710, lng: -88.0480 }, // Quiebre este superior

            // --- PUNTA NORESTE (Paralela al Canal y conectando a la I-355) ---
            { lat: 41.6610, lng: -88.0480 }, // Bajada hacia la zona del canal
            { lat: 41.6610, lng: -88.0280 }, // Extensión este superior
            { lat: 41.6670, lng: -88.0280 }, // Pequeña muesca norte industrial
            { lat: 41.6670, lng: -88.0050 }, // Punta máxima Noreste (Cruce con la I-355 / Lemont)
            { lat: 41.6530, lng: -88.0250 }, // Bajada diagonal siguiendo el curso del río/canal
            { lat: 41.6430, lng: -88.0420 }, // Continuación de la diagonal hacia el sur-oeste
            { lat: 41.6430, lng: -88.0310 }, // Saliente este medio (debajo del canal)
            { lat: 41.6310, lng: -88.0310 }, // Esquina este media inferior

            // --- SECTOR SUR Y SURESTE (Abrazando Lewis University Airport) ---
            { lat: 41.6310, lng: -88.0460 }, // Ajuste horizontal hacia el oeste
            { lat: 41.5950, lng: -88.0460 }, // Bajada vertical este larga (Límite con Lockport)
            { lat: 41.5950, lng: -88.0620 }, // Base inferior derecha (Esquina sur del aeropuerto)
            { lat: 41.6030, lng: -88.0620 }, // Quiebre interno inferior hacia el norte
            { lat: 41.6030, lng: -88.1000 }, // Base sur horizontal inferior (debajo del aeropuerto)
            { lat: 41.6210, lng: -88.1000 }, // Subida por el flanco oeste del aeropuerto

            // --- EXTENSIÓN SUROESTE Y OESTE (Zona Residencial / Límite Plainfield) ---
            { lat: 41.6210, lng: -88.1400 }, // Extensión horizontal máxima hacia el Suroeste
            { lat: 41.6420, lng: -88.1400 }, // Esquina inferior izquierda del mapa
            { lat: 41.6420, lng: -88.1250 }, // Quiebre horizontal hacia el este
            { lat: 41.6490, lng: -88.1250 }, // Subida lateral oeste
            { lat: 41.6490, lng: -88.1150 }, // Entrada recta media
            { lat: 41.6610, lng: -88.1320 }, // Diagonal exterior que bordea la I-55 hacia el Norte-Oeste
            { lat: 41.6730, lng: -88.1150 }  // Cierre del polígono en la esquina superior izquierda
        ]
    },
    {
        id: 15,
        name: "Rolling Meadows",
        center: { lat: 42.0710, lng: -88.0250 },
        paths: [
            // --- BRAZO DEL NORTE (Eje IL-53 / Arlington Park) ---
            { lat: 42.1130, lng: -88.0260 },
            { lat: 42.1130, lng: -88.0160 },
            { lat: 42.0910, lng: -88.0160 },

            // --- BORDE ESTE (Límite con Arlington Heights / Elk Grove) ---
            { lat: 42.0910, lng: -87.9910 },
            { lat: 42.0460, lng: -87.9890 },

            // --- PUNTA SURESTE (Diagonal Busse Forest / Cruce I-90) ---
            { lat: 42.0360, lng: -87.9890 },
            { lat: 42.0150, lng: -87.9620 }, // Extremo en la reserva
            { lat: 42.0220, lng: -87.9810 },
            { lat: 42.0220, lng: -88.0150 },
            { lat: 42.0370, lng: -88.0150 },
            { lat: 42.0370, lng: -88.0280 },

            // --- SECTOR DE CONEXIÓN MEDIO-OESTE ---
            { lat: 42.0440, lng: -88.0280 },
            { lat: 42.0440, lng: -88.0430 },
            { lat: 42.0520, lng: -88.0430 },
            { lat: 42.0520, lng: -88.0580 },

            // --- ALA OESTE (Abrazando Harper College) ---
            { lat: 42.0620, lng: -88.0580 },
            { lat: 42.0620, lng: -88.0820 }, // Extrema izquierda
            { lat: 42.0760, lng: -88.0820 },
            { lat: 42.0760, lng: -88.0620 }, // <-- CORREGIDO: de -87.0620 a -88.0620
            { lat: 42.0680, lng: -88.0620 }, // <-- CORREGIDO: de -87.0620 a -88.0620
            { lat: 42.0680, lng: -88.0420 },

            // --- BORDE NOROESTE (Subida final al origen) ---
            { lat: 42.0830, lng: -88.0420 },
            { lat: 42.0830, lng: -88.0260 },
            { lat: 42.1130, lng: -88.0260 }
        ]
    },
    {
        id: 16,
        name: "Palatine",
        center: { lat: 42.1120, lng: -88.0340 },
        paths: [
            // --- BORDE NORTE (Límite con Lake County / Deer Grove) ---
            { lat: 42.1510, lng: -88.0610 }, // Esquina superior izquierda del bloque norte
            { lat: 42.1510, lng: -88.0460 }, // Línea superior horizontal
            { lat: 42.1440, lng: -88.0460 }, // Escalón hacia el sur ingresando al parque
            { lat: 42.1440, lng: -88.0200 }, // Trazo horizontal norte medio
            { lat: 42.1510, lng: -88.0200 }, // Esquina superior noreste extrema
            { lat: 42.1510, lng: -88.0120 }, // Cierre del bloque del extremo norte

            // --- BORDE ESTE (Límite con Arlington Heights / Eje IL-53) ---
            { lat: 42.1310, lng: -88.0020 }, // Bajada diagonal noreste siguiendo la curva de la vía
            { lat: 42.1310, lng: -87.9940 }, // Pequeña saliente horizontal este
            { lat: 42.1260, lng: -87.9940 }, // Inicio del tramo pegado a la IL-53
            { lat: 42.1220, lng: -87.9980 }, // Ajuste interno horizontal
            { lat: 42.1060, lng: -87.9980 }, // Bajada recta paralela a la autopista IL-53
            { lat: 42.0910, lng: -87.9910 }, // Caída diagonal sureste (esquina inferior derecha de este bloque)
            { lat: 42.0990, lng: -88.0120 }, // Quiebre regresando hacia el oeste en el centro-sur
            { lat: 42.0900, lng: -88.0240 }, // Diagonal interna que apunta al suroeste

            // --- EXTENSIÓN SUR (Bota junto a la I-90 / Paul Douglas) ---
            { lat: 42.0900, lng: -88.0400 }, // Conexión horizontal hacia el inicio de la bota sur
            { lat: 42.0830, lng: -88.0440 }, // Escalón residencial sur
            { lat: 42.0830, lng: -88.0580 }, // Ajuste horizontal sobre Harper College / Rolling Meadows
            { lat: 42.0720, lng: -88.0580 }, // Bajada de la bota (borde este de Paul Douglas)
            { lat: 42.0630, lng: -88.0550 }, // Pequeño quiebre este inferior
            { lat: 42.0630, lng: -88.0620 }, // Esquina sureste extrema de la bota sur
            { lat: 42.0520, lng: -88.0620 }, // Caída máxima al sur (esquina pegada a la I-90)
            { lat: 42.0530, lng: -88.0720 }, // Base inferior izquierda de la bota sur
            { lat: 42.0740, lng: -88.0700 }, // Subida vertical izquierda bordeando Paul Douglas

            // --- BORDE OESTE (Subida y la Gran Diagonal de Inverness) ---
            { lat: 42.0740, lng: -88.0820 }, // Saliente oeste inferior (Cruce IL-62)
            { lat: 42.0950, lng: -88.0820 }, // Subida vertical recta del flanco oeste bajo
            { lat: 42.1060, lng: -88.0750 }, // Entrada escalonada hacia el centro
            { lat: 42.1150, lng: -88.0750 }, // Subida vertical media
            { lat: 42.1260, lng: -88.0980 }, // Esquina de quiebre donde arranca la gran diagonal
            { lat: 42.1260, lng: -88.0610 }, // PUNTO DE ANCLAJE: Conexión limpia con el bloque superior
            { lat: 42.1510, lng: -88.0610 }  // Cierre del polígono en el extremo norte
        ]
    },
    {
        id: 17,
        name: "Oak Brook",
        center: { lat: 41.8400, lng: -87.9520 },
        paths: [
            // --- SECTOR NORTE / NORESTE (Límite Elmhurst y Autopistas) ---
            { lat: 41.8625, lng: -87.9470 }, // Esquina superior izquierda del bloque norte
            { lat: 41.8625, lng: -87.9300 }, // Línea superior horizontal norte
            { lat: 41.8530, lng: -87.9300 }, // Pequeña bajada este
            { lat: 41.8530, lng: -87.9150 }, // Punta máxima Noreste (Cerca de la I-294 / Roosevelt Rd)

            // --- BORDE ESTE (Límite paralelo a la I-294 / DuPage County) ---
            { lat: 41.8315, lng: -87.9170 }, // Bajada vertical este alta (Bordeando cementerios)
            { lat: 41.8315, lng: -87.9240 }, // Ajuste horizontal interno por York Road
            { lat: 41.8150, lng: -87.9240 }, // Bajada vertical este media
            { lat: 41.8150, lng: -87.9295 }, // Quiebre horizontal hacia Cook County
            { lat: 41.8080, lng: -87.9295 }, // Esquina inferior derecha (Sureste, cerca de Bemis Woods)

            // --- BORDE SUR (Límite con Hinsdale / US 34 Ogden Ave) ---
            { lat: 41.8080, lng: -87.9390 }, // Base sur derecha
            { lat: 41.8040, lng: -87.9400 }, // Muesca sur inferior (Punta extrema abajo junto a la IL-83)
            { lat: 41.8040, lng: -87.9460 }, // Quiebre horizontal de la muesca sur
            { lat: 41.8125, lng: -87.9460 }, // Subida regresando hacia el centro por Kingery Hwy
            { lat: 41.8125, lng: -87.9595 }, // Línea horizontal sur-centro (Bordeando Hunter Trails)
            { lat: 41.8185, lng: -87.9595 }, // Escalón residencial interno
            { lat: 41.8185, lng: -87.9730 }, // Base sur izquierda del tramo central

            // --- EXTENSIÓN OESTE (Abrazando Midwest Club / Saddle Brook) ---
            { lat: 41.8185, lng: -88.0055 }, // Línea recta horizontal hacia el extremo oeste
            { lat: 41.8320, lng: -88.0055 }, // Esquina inferior izquierda del mapa (Saddle Brook)
            { lat: 41.8320, lng: -87.9950 }, // Entrada interna horizontal
            { lat: 41.8450, lng: -87.9950 }, // Subida por el flanco oeste de Midwest Club
            { lat: 41.8450, lng: -87.9860 }, // Ajuste horizontal superior del ala oeste

            // --- BORDE NOROESTE (Límite con Oakbrook Terrace / I-88) ---
            { lat: 41.8400, lng: -87.9860 }, // Bajada pegada a la autopista I-88
            { lat: 41.8400, lng: -87.9620 }, // Tramo largo horizontal central paralelo a la autopista
            { lat: 41.8465, lng: -87.9620 }, // Pequeño espolón que sube al norte por la IL-83
            { lat: 41.8465, lng: -87.9470 }, // Retorno horizontal buscando el bloque de origen
            { lat: 41.8625, lng: -87.9470 }  // Cierre del polígono en la esquina superior izquierda
        ]
    },
    {
        id: 18,
        name: "Mount Prospect",
        center: { lat: 42.0654, lng: -87.9364 },
        paths: [
            // --- SECTOR NORTE / NOROESTE (Límite con Prospect Heights) ---
            { lat: 42.1030, lng: -87.9520 }, // Esquina superior izquierda del bloque norte
            { lat: 42.1030, lng: -87.9400 }, // Línea horizontal norte
            { lat: 42.0945, lng: -87.9400 }, // Escalón hacia el sur
            { lat: 42.0945, lng: -87.9250 }, // Conexión horizontal hacia la US-12 (Rand Rd)

            // --- EXTENSIÓN NORESTE (Lado Oeste de Chicago Executive Airport) ---
            { lat: 42.1120, lng: -87.9250 }, // Subida vertical del espolón noreste
            { lat: 42.1120, lng: -87.9150 }, // Punta máxima Norte-Este (Cerca de Wolf Rd)
            { lat: 42.0910, lng: -87.9150 }, // Bajada vertical este del espolón
            { lat: 42.0910, lng: -87.9250 }, // Ajuste hacia el oeste cruzando la US-45
            { lat: 42.0830, lng: -87.9250 }, // Bajada hacia Central Rd

            // --- BORDE ESTE (Límite con Des Plaines) ---
            { lat: 42.0830, lng: -87.9150 }, // Saliente este medio
            { lat: 42.0520, lng: -87.9150 }, // Bajada vertical larga paralela a Elmhurst Rd
            { lat: 42.0520, lng: -87.9290 }, // Quiebre interno horizontal (Cerca de Golf Rd)
            { lat: 42.0310, lng: -87.9290 }, // Continuación de la bajada este baja

            // --- PUNTA EXTREMA SUR (Bordeando Elk Grove Village / I-90) ---
            { lat: 42.0160, lng: -87.9430 }, // Caída en diagonal hacia el extremo sur
            { lat: 42.0160, lng: -87.9540 }, // Base inferior del polígono (Cerca de Algonquin Rd)
            { lat: 42.0340, lng: -87.9540 }, // Subida vertical del flanco suroeste

            // --- BORDE OESTE (Límite con Arlington Heights) ---
            { lat: 42.0340, lng: -87.9420 }, // Ajuste horizontal hacia el este
            { lat: 42.0630, lng: -87.9420 }, // Subida recta por el lateral izquierdo principal
            { lat: 42.0630, lng: -87.9520 }, // Entrada profunda hacia la izquierda (Oeste)
            { lat: 42.0730, lng: -87.9520 }, // Subida escalonada izquierda
            { lat: 42.0730, lng: -87.9430 }, // Ajuste horizontal central
            { lat: 42.0860, lng: -87.9430 }, // Subida vertical buscando el bloque norte
            { lat: 42.0860, lng: -87.9520 }, // Último quiebre horizontal a la izquierda
            { lat: 42.1030, lng: -87.9520 }  // Cierre del polígono en el origen norte
        ]
    },
    {
        id: 19,
        name: "Lockport",
        center: { lat: 41.5895, lng: -88.0520 },
        paths: [
            // --- BORDE NORTE (Límite directo con Romeoville) ---
            { lat: 41.6310, lng: -88.0460 }, // Esquina superior izquierda (Conexión Romeoville)
            { lat: 41.6310, lng: -88.0120 }, // Línea horizontal norte (135th St)
            { lat: 41.6160, lng: -88.0120 }, // Escalón hacia el sur
            { lat: 41.6160, lng: -87.9930 }, // Extensión noreste buscando la I-355

            // --- BORDE ESTE (Eje Interestatal I-355) ---
            { lat: 41.5950, lng: -87.9930 }, // Bajada este superior paralela a la autopista
            { lat: 41.5950, lng: -88.0110 }, // Ajuste horizontal interno (Cerca de 151st St)
            { lat: 41.5800, lng: -88.0110 }, // Bajada este media
            { lat: 41.5800, lng: -87.9940 }, // Saliente este inferior (Hacia Hadley Valley)
            { lat: 41.5660, lng: -87.9940 }, // Esquina sureste extrema

            // --- BORDE SUR (Límite con Joliet) ---
            { lat: 41.5660, lng: -88.0280 }, // Línea horizontal sur (Cruce de la IL-171 / Archer Ave)
            { lat: 41.5510, lng: -88.0280 }, // Muesca que baja al sur (Zonas industriales bajas)
            { lat: 41.5510, lng: -88.0480 }, // Base inferior izquierda (Cruce con el Fox River / Canal)
            { lat: 41.5650, lng: -88.0480 }, // Subida por el eje del río

            // --- BORDE OESTE (Límite con Crest Hill) ---
            { lat: 41.5650, lng: -88.0690 }, // Extensión hacia la izquierda (Oeste)
            { lat: 41.5800, lng: -88.0690 }, // Esquina inferior izquierda (Cerca de Weber Rd)
            { lat: 41.5800, lng: -88.0520 }, // Retorno horizontal este
            { lat: 41.5950, lng: -88.0520 }, // Subida vertical por el flanco izquierdo principal
            { lat: 41.5950, lng: -88.0460 }, // Ajuste horizontal de cuadrícula
            { lat: 41.6310, lng: -88.0460 }  // Cierre del polígono en el límite norte con Romeoville
        ]
    },
    {
        id: 20,
        name: "Lemont",
        center: { lat: 41.6735, lng: -87.9950 },
        paths: [
            // --- SECTOR NORTE (Cruce del Canal y Río Des Plaines) ---
            { lat: 41.7100, lng: -87.9950 }, // Esquina superior izquierda del brazo norte
            { lat: 41.7100, lng: -87.9750 }, // Esquina superior derecha (Límite norte)
            { lat: 41.6930, lng: -87.9750 }, // Bajada este del corredor del río
            { lat: 41.6930, lng: -87.9550 }, // Extensión noreste (Zonas industriales norte)

            // --- BORDE ESTE (Límite con Palos Park / Forest Preserves) ---
            { lat: 41.6810, lng: -87.9550 }, // Esquina noreste principal
            { lat: 41.6810, lng: -87.9670 }, // Quiebre interno por Bell Road
            { lat: 41.6560, lng: -87.9670 }, // Bajada vertical este larga
            { lat: 41.6560, lng: -87.9520 }, // Saliente este medio (Hacia McCarthy Rd)
            { lat: 41.6380, lng: -87.9520 }, // Esquina sureste extrema del bloque residencial
            { lat: 41.6380, lng: -87.9810 }, // Regreso horizontal hacia el oeste

            // --- BORDE SUR (Límite con Homer Glen) ---
            { lat: 41.6310, lng: -87.9810 }, // Escalón sur inferior
            { lat: 41.6310, lng: -88.0120 }, // Línea horizontal sur larga (135th St)
            { lat: 41.6420, lng: -88.0120 }, // Subida de cuadrícula sur-oeste
            { lat: 41.6420, lng: -88.0240 }, // Ajuste horizontal buscando la autopista

            // --- BORDE OESTE (Conexión I-355 y Límite Romeoville) ---
            { lat: 41.6530, lng: -88.0250 }, // Esquina inferior izquierda (Cruce con la I-355 / Romeoville)
            { lat: 41.6670, lng: -88.0050 }, // Diagonal noroeste siguiendo el corredor del canal
            { lat: 41.6780, lng: -88.0150 }, // Saliente industrial oeste
            { lat: 41.6880, lng: -88.0150 }, // Subida por el flanco izquierdo de la cantera
            { lat: 41.6880, lng: -87.9950 }, // Cierre horizontal superior buscando el brazo norte
            { lat: 41.7100, lng: -87.9950 }  // Cierre del polígono en el origen norte
        ]
    },
    {
        id: 21,
        name: "Lake Zurich",
        center: { lat: 42.1965, lng: -88.0934 },
        paths: [
            // --- SECTOR NORTE (Eje IL-63 / Borde Superior) ---
            { lat: 42.2155, lng: -88.0860 }, // Esquina superior izquierda del brazo norte
            { lat: 42.2155, lng: -88.0770 }, // Línea horizontal norte superior
            { lat: 42.2240, lng: -88.0770 }, // Espolón que sube al norte por la IL-63
            { lat: 42.2240, lng: -88.0690 }, // Punta máxima Noreste superior
            { lat: 42.2100, lng: -88.0690 }, // Bajada este del brazo norte
            { lat: 42.2100, lng: -88.0580 }, // Escalón horizontal hacia el este

            // --- BORDE ESTE (Límite con Hawthorn Woods / Kildeer) ---
            { lat: 42.1970, lng: -88.0580 }, // Bajada vertical este alta
            { lat: 42.1970, lng: -88.0515 }, // Saliente horizontal este medio (Main St / IL-22)
            { lat: 42.1900, lng: -88.0515 }, // Ajuste vertical este
            { lat: 42.1900, lng: -88.0580 }, // Retorno horizontal interno
            { lat: 42.1740, lng: -88.0580 }, // Bajada este baja (Límite con Old Mill Grove)
            { lat: 42.1740, lng: -88.0665 }, // Quiebre horizontal hacia el oeste

            // --- EXTENSIÓN SUR (Diagonal de Rand Rd / Cuba Marsh) ---
            { lat: 42.1640, lng: -88.0665 }, // Caída vertical sureste
            { lat: 42.1640, lng: -88.0820 }, // Base inferior derecha (Cerca de Ela Rd)
            { lat: 42.1750, lng: -88.0820 }, // Subida buscando el cruce de la autopista
            { lat: 42.1620, lng: -88.0990 }, // Punta oblicua extrema sur-oeste (Dentro de Cuba Marsh)
            { lat: 42.1770, lng: -88.1060 }, // Regreso en diagonal sobre la US-12 (Rand Rd)

            // --- BORDE OESTE (Límite con North Barrington) ---
            { lat: 42.1770, lng: -88.1130 }, // Esquina inferior izquierda del mapa
            { lat: 42.1915, lng: -88.1130 }, // Subida vertical izquierda por el flanco del lago
            { lat: 42.1915, lng: -88.1050 }, // Ajuste horizontal interno (Cerca de Miller Rd)
            { lat: 42.2030, lng: -88.1050 }, // Subida vertical centro-oeste
            { lat: 42.2030, lng: -88.0860 }, // Conexión horizontal superior buscando el origen norte
            { lat: 42.2155, lng: -88.0860 }  // Cierre del polígono en la esquina superior norte
        ]
    },
    {
        id: 22,
        name: "Lake Forest",
        center: { lat: 42.2450, lng: -87.8500 },
        paths: [
            // --- LÍMITE NORTE (Frontera con Lake Bluff) ---
            { lat: 42.2680, lng: -87.8280 }, // Esquina noreste pegada a la costa del Lago Michigan
            { lat: 42.2680, lng: -87.8540 }, // Línea horizontal norte hacia el interior (Deerpath Rd / IL-60)
            { lat: 42.2790, lng: -87.8540 }, // Muesca que sube al norte por Green Bay Rd
            { lat: 42.2790, lng: -87.8760 }, // Tramo horizontal norte alto (Cerca de Waukegan Rd / IL-43)

            // --- ALA OESTE (Cruzando la I-94 / Límite con Libertyville y Mettawa) ---
            { lat: 42.2590, lng: -87.8760 }, // Ajuste hacia el sur buscando el corredor de la autopista
            { lat: 42.2590, lng: -87.9040 }, // Extensión profunda hacia el oeste cruzando la I-94
            { lat: 42.2470, lng: -87.9040 }, // Esquina superior izquierda del ala oeste
            { lat: 42.2470, lng: -87.9150 }, // Punta máxima hacia el oeste (Límite corporativo poniente)
            { lat: 42.2310, lng: -87.9150 }, // Bajada vertical oeste por el borde de Vernon Hills

            // --- BORDE SUR-OESTE (Regreso por Everett Rd / I-94) ---
            { lat: 42.2130, lng: -87.8960 }, // Caída diagonal suroeste baja
            { lat: 42.2130, lng: -87.8810 }, // Base horizontal sur-oeste (Everett Rd)
            { lat: 42.2240, lng: -87.8810 }, // Subida pegada al flanco este de la autopista I-94
            { lat: 42.2240, lng: -87.8640 }, // Ajuste horizontal interno cruzando Waukegan Rd

            // --- BORDE SUR (Límite con Bannockburn y Highwood) ---
            { lat: 42.2090, lng: -87.8640 }, // Caída vertical sur (Esquina inferior izquierda del bloque este)
            { lat: 42.2090, lng: -87.8340 }, // Línea horizontal sur de regreso a la costa (Half Day Rd / IL-60)
            { lat: 42.2210, lng: -87.8340 }, // Escalón residencial interno junto a Highwood
            { lat: 42.2210, lng: -87.8220 }, // Conexión a la esquina inferior derecha en la playa

            // --- LÍNEA DE COSTA ESTE (Lago Michigan) ---
            { lat: 42.2350, lng: -87.8180 }, // Curva baja de la costa este
            { lat: 42.2510, lng: -87.8210 }, // Punto medio costero (Cerca de Lake Forest Beach)
            { lat: 42.2680, lng: -87.8280 }  // Cierre del polígono en la esquina norte
        ]
    },
    {
        id: 23,
        name: "Hoffman Estates",
        center: { lat: 42.0450, lng: -88.1200 },
        paths: [
            // --- SECTOR NORTE (Límite con Inverness / Palatine) ---
            { lat: 42.1120, lng: -88.0980 }, // Punta máxima Noreste superior
            { lat: 42.0940, lng: -88.0980 }, // Bajada vertical este del brazo norte
            { lat: 42.0940, lng: -88.0820 }, // Conexión horizontal pegada a Palatine
            { lat: 42.0720, lng: -88.0820 }, // Bajada vertical flanqueando Paul Douglas

            // --- SECTOR ESTE (Límite con Schaumburg) ---
            { lat: 42.0720, lng: -88.0620 }, // Esquina noreste del bloque central-este
            { lat: 42.0440, lng: -88.0620 }, // Caída recta este cruzando la I-90
            { lat: 42.0440, lng: -88.0410 }, // Saliente horizontal este bajo
            { lat: 42.0290, lng: -88.0410 }, // Punta extrema Sureste (Junto a Schaumburg)
            { lat: 42.0290, lng: -88.0690 }, // Retorno horizontal hacia el oeste por Golf Rd
            { lat: 42.0160, lng: -88.0690 }, // Muesca sur inferior derecha
            { lat: 42.0160, lng: -88.0880 }, // Base horizontal inferior derecha

            // --- CUERPO CENTRAL (Corredor I-90 / Algonquin Rd) ---
            { lat: 42.0400, lng: -88.0880 }, // Ajuste vertical interno buscando la autopista
            { lat: 42.0400, lng: -88.1380 }, // Tramo horizontal largo central que pasa bajo South Barrington
            { lat: 42.0280, lng: -88.1380 }, // Caída sur que conecta con el bloque del bosque Poplar Creek

            // --- EXTENSIÓN ALA OESTE (Rodeando Poplar Creek / Límite con Elgin) ---
            { lat: 42.0280, lng: -88.1750 }, // Línea recta horizontal hacia el extremo poniente
            { lat: 42.0480, lng: -88.1750 }, // Subida por el flanco oeste bajo
            { lat: 42.0480, lng: -88.1920 }, // Saliente superior del ala oeste (Límite extremo noroeste)
            { lat: 42.0220, lng: -88.1920 }, // Caída vertical izquierda rozando el borde de Elgin
            { lat: 42.0220, lng: -88.1480 }, // Retorno horizontal por la base sur del ala oeste
            { lat: 42.0400, lng: -88.1480 }, // Ajuste de subida vertical interno

            // --- SUBIDA FLANCO OESTE ALTO Y RETORNO ---
            { lat: 42.0520, lng: -88.1250 }, // Conexión diagonal siguiendo el límite con South Barrington
            { lat: 42.0640, lng: -88.1250 }, // Subida vertical buscando el brazo norte original
            { lat: 42.0640, lng: -88.1120 }, // Ajuste horizontal de cuadrícula
            { lat: 42.1120, lng: -88.1120 }, // Subida vertical izquierda del brazo norte
            { lat: 42.1120, lng: -88.0980 }  // Cierre del polígono en el punto de origen
        ]
    },
    {
        id: 24,
        name: "Barrington",
        center: { lat: 42.1535, lng: -88.1360 },
        paths: [
            // --- SECTOR NOROESTE (Eje US-14 / Northwest Hwy) ---
            { lat: 42.1645, lng: -88.1480 }, // Esquina superior izquierda (Entrada por W Northwest Hwy)
            { lat: 42.1645, lng: -88.1345 }, // Límite norte superior junto a la US-14
            { lat: 42.1585, lng: -88.1345 }, // Escalón hacia el sur (Eje de la vía férrea)
            { lat: 42.1585, lng: -88.1250 }, // Avance horizontal norte central

            // --- ALA ESTE (Límite con Cuba Marsh / Fox Point) ---
            { lat: 42.1585, lng: -88.1020 }, // Esquina noreste del saliente oriental (Borde de Cuba Marsh)
            { lat: 42.1480, lng: -88.1020 }, // Quiebro vertical este hacia el sector residencial
            { lat: 42.1480, lng: -88.0820 }, // Extensión máxima real al este (Borde de la urbanización Fox Point)
            { lat: 42.1345, lng: -88.0820 }, // Esquina sureste del ala oriental
            { lat: 42.1345, lng: -88.1130 }, // Retorno horizontal por el límite sur de Cook County line

            // --- SECTOR SUR / APÉNDICE INFERIOR (S. Barrington Rd) ---
            { lat: 42.1390, lng: -88.1130 }, // Ángulo interno de subida hacia el centro histórico
            { lat: 42.1390, lng: -88.1260 }, // Ajuste horizontal hacia el eje de Barrington Rd
            { lat: 42.1215, lng: -88.1260 }, // Caída vertical este del apéndice sur
            { lat: 42.1215, lng: -88.1370 }, // Base inferior (Cruce norte de W Dundee Rd)
            { lat: 42.1365, lng: -88.1370 }, // Subida vertical por el flanco oeste del apéndice

            // --- BORDE OESTE (Límite con Lake Barrington) ---
            { lat: 42.1365, lng: -88.1480 }, // Saliente horizontal oeste bajo hacia S Slocum Lake Rd
            { lat: 42.1490, lng: -88.1480 }, // Flanco vertical izquierdo (Oeste principal)
            { lat: 42.1490, lng: -88.1480 }, // Cierre y ajuste de cuadrícula oeste alto
            { lat: 42.1645, lng: -88.1480 }  // Cierre del polígono en el punto de origen
        ]
    },
];

// Lista de 10 configuraciones e imágenes de proyectos dinámicos
export const MOCK_PROJECTS_POOL: Omit<Project, 'id'>[] = [
    {
        image: '/assets/images/features/map/house-shingles.png',
        specs: { piecesSquare: '64', bundlesSquare: '3', nailsSquare: '256', exposure: '5 5/8" (144 mm)', dimensions: '13 1/4" x 39 3/8"' }
    },
    {
        image: '/assets/images/features/map/house_1.png',
        specs: { piecesSquare: '60', bundlesSquare: '4', nailsSquare: '240', exposure: '5 1/2" (140 mm)', dimensions: '12" x 36"' }
    },
    {
        image: '/assets/images/features/map/house_2.png',
        specs: { piecesSquare: '68', bundlesSquare: '3', nailsSquare: '272', exposure: '5 5/8" (144 mm)', dimensions: '13 1/4" x 39 3/8"' }
    },
    {
        image: '/assets/images/features/map/house_3.png',
        specs: { piecesSquare: '65', bundlesSquare: '3.5', nailsSquare: '260', exposure: '5 3/4" (146 mm)', dimensions: '13" x 40"' }
    },
    {
        image: '/assets/images/features/map/house_4.png',
        specs: { piecesSquare: '72', bundlesSquare: '3', nailsSquare: '288', exposure: '5" (127 mm)', dimensions: '12 1/4" x 36"' }
    },
    {
        image: '/assets/images/features/map/house_5.png',
        specs: { piecesSquare: '56', bundlesSquare: '4', nailsSquare: '224', exposure: '5 7/8" (150 mm)', dimensions: '14" x 40"' }
    },
    {
        image: '/assets/images/features/map/house_6.png',
        specs: { piecesSquare: '66', bundlesSquare: '3', nailsSquare: '264', exposure: '5 5/8" (144 mm)', dimensions: '13 1/4" x 39 3/8"' }
    },
    {
        image: '/assets/images/features/map/house_7.png',
        specs: { piecesSquare: '62', bundlesSquare: '3.5', nailsSquare: '248', exposure: '5 1/2" (140 mm)', dimensions: '12 1/2" x 38"' }
    },
    {
        image: '/assets/images/features/map/house_8.png',
        specs: { piecesSquare: '70', bundlesSquare: '3', nailsSquare: '280', exposure: '5 5/8" (144 mm)', dimensions: '13 1/4" x 39 3/8"' }
    },
    {
        image: '/assets/images/features/map/house_9.png',
        specs: { piecesSquare: '64', bundlesSquare: '4', nailsSquare: '256', exposure: '5 3/4" (146 mm)', dimensions: '13" x 39"' }
    }
];