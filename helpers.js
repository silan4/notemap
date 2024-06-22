//gönderilen verileri lokal'e kaydeder
export const setStorage = (data) => {
    //gelen veriyi stirng 'e çevirme
    const strData = JSON.stringify(data);


    //lokal ' e kaydetme
    localStorage.setItem('NOTES', strData );
}

// value 'lara karşılık gelen içerikleri için
export const translate = {
    goto:"Ziyaret",
    home:"Ev",
    job:"İş",
    park:"Park Yeri",
};




//lokalden eleman alır
//ve geri döndürür
export const getStorage = (key) => {
    // lokal'den string veriyi alma
    const strData = localStorage.getItem(key);
    //veriyi js objesine çevirme
    return JSON.parse(strData);
}

export var userIcon = L.icon({
    iconUrl: 'notemapimg/Person.png ',
    iconSize: [70,75],
    popupAnchor: [50 ,50],
    shadowUrl: 'notemapimg/my-icon-shadow.png',
    shadowSize:[68,95],
    shadowAnchor: [30,34],
  });

  var homeIcon = L.icon({
    iconUrl: 'notemapimg/Home_8.png',
    iconSize: [70,75],
    popupAnchor: [50 ,50],
    shadowUrl: 'notemapimg/my-icon-shadow.png',
    shadowSize:[68,95],
    shadowAnchor: [30,34],
  });

   var jobIcon = L.icon({
    iconUrl: 'notemapimg/Briefcase_8.png',
    iconSize: [70,75],
    popupAnchor: [50 ,50],
    shadowUrl: 'notemapimg/my-icon-shadow.png',
    shadowSize:[68,95],
    shadowAnchor: [30,34],
  });

  var gotoIcon = L.icon({
    iconUrl: 'notemapimg/Aeroplane_8.png',
    iconSize: [70,75],
    popupAnchor: [50 ,50],
    shadowUrl: 'notemapimg/my-icon-shadow.png',
    shadowSize:[68,95],
    shadowAnchor: [30,34],
  });

  var parkIcon = L.icon({
    iconUrl: 'notemapimg/Parking_8.png',
    iconSize: [70,75],
    popupAnchor: [50 ,50],
    shadowUrl: 'notemapimg/my-icon-shadow.png',
    shadowSize:[68,95],
    shadowAnchor: [30,34],
  });

  export const icons = {
    goto:gotoIcon,
    home:homeIcon,
    job:jobIcon,
    park:parkIcon,
    
};
  

