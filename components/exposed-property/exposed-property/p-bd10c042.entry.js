import{r as e,h as o}from"./p-05d95eea.js";const i=class{constructor(o){e(this,o);this.token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjYwNTgwNzcsIkNMQUlNLTAxIjoicktLMi9DY1dQQnM9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThBcklIUzg2aEpCQSIsIkNMQUlNLTA2IjoiQUVxVnRCMm1kWTg9In0.o-Yoq1n4n8W8qQT1I6XitpDuV65AWHiYJiXjrxoD3B0"}async sendData(){const e=`https://gateway.igloorooms.com/IR/Get_Exposed_Property?Ticket=${this.token}`;const o={id:"42",language:"EN",currency:"USD",aname:"",include_sales_rate_plans:true};try{const i=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(i.ok){const e=await i.json();console.log(e)}else{console.log("error")}}catch(e){console.log("error")}}componentWillLoad(){this.sendData()}render(){return o("div",{key:"b73fd3cf3d62c88a32de8ba93aa2413fa37c2fb0"},"hello")}};export{i as rf_property};
//# sourceMappingURL=p-bd10c042.entry.js.map