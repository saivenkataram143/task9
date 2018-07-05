function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()  {
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON('data/dt.json',function(text){
  var dt=JSON.parse(text);
  console.log(dt);
  profileData(dt.profiles);
  EductionData(dt.Eduction);
})
var mainDiv=document.querySelector(".main");
function profileData(pro) {
//  var subDiv=document.createElement("div");
  //subDiv.classList.add("subdiv");
  //mainDiv.appendChild(subDiv);
  for (var i = 0; i <pro.length; i++) {
    var subDiv=document.createElement("div");
    subDiv.classList.add("subdiv");
    mainDiv.appendChild(subDiv);
    var img=document.createElement("img");
     img.src="images/profile.png";
     subDiv.appendChild(img);
  var name=document.createElement("h2");
  name.textContent=pro[i].name;
  var label=document.createElement("h3");
  label.textContent=pro[i].label;
  var company=document.createElement("h3");
  company.textContent=pro[i].company;

    var link=document.createElement("a");
  link.href="resume.html?id="+pro[i].id;
  link.textContent="View Profile";
  function EductionData(edu) {
    for (var i = 0; i < edu.length; i++) {
      var subDiv=document.createElement("div");
      subDiv.classList.add("subdiv");
      mainDiv.appendChild(subDiv);
      var Eduction=document.createElement("h2");
      Eduction.textContent=edu[i].Eduction;
      subDiv.appendChild(Eduction);
    }

  }

  subDiv.appendChild(name);
  subDiv.appendChild(label);
  subDiv.appendChild(company);
  subDiv.appendChild(link);

/*function EductionData(edu) {
  for (var i = 0; i < edu.length; i++) {
    var subDiv=document.createElement("div");
    subDiv.classList.add("subdiv");
    mainDiv.appendChild(subDiv);
    var Eduction=document.createElement("h2");
    Eduction.textContent=edu[i].Eduction;
    subDiv.appendChild(Eduction);
  }

}*/
}
}
