const data = [
  {
    id: 0,
    name: "Neem Coated Urea(N)",
    image:
      "https://indiacsr.in/wp-content/uploads/2020/08/Neem-Coated-Urea.png",
    price: 250,
    description:
      "Neem coated urea is created by utilising two best things available. First the urea created by technology from Air & Natural gas and second products from nature’s gift i.e. neem plant. Neem has proven Nitrification inhibition properties and hence slows down the release of nitrogen from urea and makes available nitrogen over a longer period with minimum loss of nitrogen thereby increasing nitrogen use efficiency. At our Hazira and Shahjahanpur Plants, Neem coated urea is produced by uniformly coating neem oil on prilled urea during the manufacturing process.",
    category: "Primary Nutrient",
    company: "NFL",

    featured: true,
    reviews: 16,
    stars: 2.8,

    stock: 5,
  },
  {
    id: 1,
    name: "DAP 18-46-0",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2022/9/HA/TQ/WM/159734437/product-jpeg-500x500.jpg",
    price: 65,
    Description:
      "Diammonium Phosphate (DAP) 18-46-0 fertilizer provides water-soluble, plant-available phosphate and ammonium, and it contains a combination of strong nitrogen and phosphorous nutrient content to make it a popular choice for growers around the world. This versatile fertilizer is ideal for all types of crops and soils, including low pH or alkaline soil, has excellent storage and transport characteristics, and shows good spreading behaviors due to its granule size.",
    company: "Paras",
    category: "Primary Nutrient",
    shipping: true,
    reviews: 15,
    stars: 5,

    stock: 3,
  },
  {
    id: 2,
    name: "Nitrophosphate (NP)",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/6/JG/SX/JX/54373617/nitro-phosphate-500x500.jpg",
    price: 450,
    description:
      "Nitrophosphate (NP) is a granulated fertilizer in which each grain has equal amounts of Phosphorus (P) 20% & Nitrogen (N) 22%. In addition to this, NP being a highly acidic product with a pH of 3.5, is the most suitable fertilizer for soils that have a high pH and are alkaline in nature.",
    company: "Umbrella",
    category: "Primary Nutrient",

    featured: true,
    reviews: 40,
    stars: 2.3,

    stock: 7,
  },
  {
    id: 3,
    name: "Npk 10-26-26",
    image:
      "https://mahadhan.co.in/wp-content/uploads/2018/12/Smartek-10-26-26-1.png",
    price: 289,
    description:
      "NPK fertilizer contains three essential nutrients needed for plant growth and overall plant health. These three essential nutrients include nitrogen (N), phosphorus (P), and potassium (K).",
    category: "Primary Nutrient",
    company: "Mahadhan",
    shipping: true,
    reviews: 25,
    stars: 4.5,

    stock: 8,
  },
  {
    id: 4,
    name: "Npk 12-32-16",
    image:
      "https://5.imimg.com/data5/RY/VJ/ZD/SELLER-2375526/npk-12-32-16-fertilizer-1000x1000.png",
    price: 399,
    description:
      "NPK 12-32-16 is a DAP based composite fertiliser and is produced at IFFCOs Kandla unit along with NPK 12-32-16. NPK 12-32-16 fixes the phosphorus and potassium content in the soil and is highly effective in soils with leaching condition.",
    company: "Fertinagro",
    category: "Primary Nutrient",

    reviews: 10,
    stars: 3.5,

    stock: 2,
  },
  {
    id: 5,
    name: "Magnesium SUlphate",
    image:
      "https://mahadhan.co.in/wp-content/uploads/2017/05/mahadhanmansulf.jpg",
    price: 150,
    description:
      "Magnesium sulfate is a magnesium salt having sulfate as the counterion. It has a role as an anticonvulsant, a cardiovascular drug, a calcium channel blocker, an anaesthetic, a tocolytic agent, an anti-arrhythmia drug, an analgesic and a fertilizer. It is a magnesium salt, a metal sulfate and an organic magnesium salt",
    company: "Mahadhan",
    category: "Secondary Nutrient",
    shipping: true,
    featured: true,
    reviews: 25,
    stars: 1.25,

    stock: 9,
  },
  {
    id: 6,
    name: "Sulphur Bentonite",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/1/DF/SE/GC/601865/sulphur-90-wg-500x500.jpg",
    price: 100,
    description:
      "Bentonite Sulphur is straight Sulphatic fertilizer containing Sulphur and Bentonite clay. The Sulphur present is 90% in these fertilizers and is the highest among other category of Sulphated fertilizers. This makes Bentonite Sulphur more effective in terms of supplying Sulphur to Crops.",
    category: "Secondary Nutrient",
    company: "MaxSulf",

    reviews: 23,
    stars: 1.9,

    stock: 31,
  },
  {
    id: 7,
    name: "N.P.K. 19:19:19",
    image:
      "https://utkarshagro.com/wp-content/uploads/2023/01/MG_9798-copy-3.jpg",
    price: 666,
    description:
      "A water-soluble fertilizer with an optimum combination of Nitrogen, Phosphorous, Potassium, and Sodium. It is readily soluble in water and is best for drip irrigation and foliar application of fertilizer. This combination is suitable for almost all crops and can be used along with pesticides and fungicides.",
    company: "Utkarsh",
    category: "Water Soluble",
    shipping: true,
    reviews: 24,
    stars: 3.4,

    stock: 23,
  },
  {
    id: 8,
    name: "Urea Phosphate(17:44:0)",
    image:
      "https://5.imimg.com/data5/AZ/KF/VN/SELLER-2375526/urea-phosphate-npk-17-44-00-500x500.png",
    price: 789,
    description:
      "A water-soluble fertilizer with high phosphorus and Nitrogen content along with plant development also cleans drip pipes. It is readily soluble in water and is best for drip irrigation and foliar application of fertilizer. This combination ensures strong flower and fruit development.",
    company: "Fertinagro",
    category: "Water Soluble",

    reviews: 2,
    stars: 2.25,

    stock: 5,
  },
  {
    id: 9,
    name: "Potassium Nitrate (13:0:45)",
    image: "https://www.slngroup.in/wp-content/uploads/2021/02/sl51.jpg",
    price: 345,
    description:
      "A water-soluble fertilizer with high Potassium and Nitrogen content along with optimal amount of Sodium. It is readily soluble in water and is best for drip irrigation and foliar application of fertilizer. This combination is suitable post boom and for physiological maturity of crop.",
    category: "Water Soluble",
    company: "SLN Group",
    shipping: true,
    reviews: 25,
    stars: 3.8,

    stock: 30,
  },
  {
    id: 10,
    name: "Calcium Nitrate",
    image:
      "https://novelseeds.com/wp-content/uploads/2017/12/Calcium-Nitrate-Fertilizer.jpg",
    price: 256,
    description:
      "Calcium nitrate appears as white to light gray granular solid. May be either the anhydrous compound or the tetrahydrate. Used in fertilizers, explosives and pyrotechnics. CAMEO Chemicals. Calcium nitrate is inorganic nitrate salt of calcium.",
    company: "Novel",
    category: "Water Soluble",
    shipping: true,
    reviews: 25,
    stars: 4.9,

    stock: 2,
  },
  {
    id: 11,
    name: "Phosphate Solubalizing Bacteria",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/10/VY/LZ/FX/33322917/phosphate-solubilizing-bacteria-500x500.jpg",
    price: 90,
    description:
      "Phosphorous Solution Bio Fertiliser contains bacteria that are capable of solubilizing inorganic Phosphorous from insoluble compounds and providing it for plant uptake. These microorganisms are commonly known as Phosphorous solubilizing bacteria or Phosphorous dissolving bacteria.",
    category: "Organic & Bio-Fertilisers",
    company: "Mukati",
    shipping: true,
    reviews: 25,
    stars: 2.5,

    stock: 11,
  },
  {
    id: 12,
    name: "Azotobacter",
    image: "http://www.mbfindia.net/wp-content/uploads/2018/04/17.jpg",
    price: 24,
    description:
      "Azotobacter is a group of Gram negative, free-living, nitrogen fixing aerobic bacteria inhabiting in the soil. They are oval or spherical in shape and form thick-walled cysts (dormant cells resistant to deleterious conditions) under unfavorable environmental conditions.",
    category: "Organic & Bio-Fertilisers",
    company: "MBF",

    reviews: 257,
    stars: 2.9,

    stock: 33,
  },
  {
    id: 13,
    name: "Rhizbium",
    image: "https://m.media-amazon.com/images/I/31HqtIUL+cL._SY300_SX300_.jpg",
    price: 899,
    description:
      "Rhizobium is an effective soil bacteria that fixes the atmospheric nitrogen in leguminous plants like Bengal gram, green gram, red gram, cowpea, soybean, etc",
    category: "Organic & Bio-Fertilisers",
    company: "Bokashi Bran",
    shipping: true,
    reviews: 12,
    stars: 4.9,

    stock: 6,
  },
  {
    id: 14,
    name: "Boron 20%",
    image: "https://m.media-amazon.com/images/I/811OYha6EEL._SY879_.jpg",
    price: 675,
    description:
      "Boron is a micronutrient essential for flowering and fruit setting of crops. IFFCO Boron (Di Sodium Tetra Borate Penta Hydrate) (B 20%) effectively provides crucial micronutrients. It also enhances the absorption of other nutrients such as calcium in plants.",
    category: "Micronutrients",
    company: "Biosar",
    shipping: true,
    reviews: 250,
    stars: 4.9,

    stock: 23,
  },
  {
    id: 15,
    name: "Plant-Growth promoter-sagarika",
    image: "https://poorti.net/shop/img/p/1/1/0/8/1108-large_default.jpg",
    price: 299,
    description:
      "Plant growth promoters are substances that enhance the development of plants. They help in boosting the growth of the crop as well as its quality. The presence of different types of plant hormones such as cytokinins, gibberellins, and auxins in plant growth promoters helps in influencing better plant growth.",
    category: "Organic & Bio-Fertilisers",
    Company: "IFFCO",

    reviews: 2500,
    stars: 0.5,

    stock: 30,
  },
  {
    id: 16,
    name: "Zinc Sulphate Monohydrate 33%",
    image:
      "https://img1.exportersindia.com/product_images/bc-small/dir_60/1782342/zinc-sulphate-monohydrate-33-1506942569-3370584.jpeg",
    price: 655,
    description:
      "Zinc is one of the essential micronutrients that acts as a catalyst for activating enzymes required for synthesis of plant proteins. IFFCO Zinc Sulphate Monohydrate (Zn 33%, S- 15%) prevents and corrects the zinc deficiency in crops.",
    shipping: true,
    category: "Micronutrients",
    company: "Anmol",
    reviews: 45,
    stars: 4.9,

    stock: 9,
  },
  {
    id: 17,
    name: "Nano Urea(Liquid) Fertilizer",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/12/RL/OA/UO/27580285/iffco-nano-urea-liquid-500x500.jpg",
    price: 125,
    description:
      "It is urea in the form of a nanoparticle. It is a nutrient (liquid) to provide nitrogen to plants as an alternative to the conventional urea. Urea is a chemical nitrogen fertiliser, white in colour, which artificially provides nitrogen, a major nutrient required by plants.",
    category: "IFFCO",
    company: "	LABDHI",
    shipping: true,
    reviews: 250,
    stars: 2.9,

    stock: 14,
  },
  {
    id: 18,
    name: "Plant Growth Promoter",
    image: "https://m.media-amazon.com/images/I/71AfWbObJYL._SX679_.jpg",
    price: 199,
    description:
      "Plant growth promoters are plant hormones that lead to the development and growth of plants. Three prominent plant growth promoters are Auxins, Gibberellins, and Cytokinins. Auxins induce cell differentiation, cell division, and elongation.",
    category: "Organic & Bio-Fertilisers",
    company: "	TrustBasket",
    shipping: true,
    reviews: 25,
    stars: 3.9,

    stock: 12,
  },
  {
    id: 19,
    name: "Azospirillium",
    image: "https://m.media-amazon.com/images/I/71gvZ-b-ezL._SL1500_.jpg",
    price: 99,
    description:
      "Azospirillium is a biofertilizer that contains Acetobacter bacteria which has the ability to colonize the plant roots and fixing atmospheric Nitrogen. It is especially beneficial for sugarcane plantation as it activates the soil biologically and stimulates plant growth.",
    category: "Organic & Bio-Fertilisers",
    company: "abtec",

    reviews: 50,
    stars: 4.5,

    stock: 10,
  },
];

export default data;
