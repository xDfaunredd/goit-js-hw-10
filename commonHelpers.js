import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-77e16229.js";const n=document.querySelector("[data-start]"),f=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]"),c=1e3;let o=null;n.disabled=!0;let s;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(s=t[0],s<Date.now()){h.error({message:"Please choose the date in the future",position:"topRight"}),n.disabled=!0;return}n.disabled=!1,console.log(s)}};m("#datetime-picker",S);function b(t){const d=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:i,seconds:l}}const r=t=>t.toString().padStart(2,"0"),v=()=>{n.disabled=!0,o!==null&&clearInterval(o);const t=Date.now();let a=s-t;o=setInterval(()=>{const e=b(a);f.textContent=r(e.days),y.textContent=r(e.hours),D.textContent=r(e.minutes),p.textContent=r(e.seconds),a-=c,a<=0&&(clearInterval(o),o=null)},c)};n.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
