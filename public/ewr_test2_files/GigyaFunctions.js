function showShareBar(aa,ba){if(aa==null){aa=$('title').text();}
var ua=new gigya.socialize.UserAction();if(aa!=null&&aa!=undefined){ua.setTitle(jQuery.trim(aa));}
if(ba!=null){ua.setDescription(jQuery.trim(ba));ua.setUserMessage(jQuery.trim(ba));}
else{var ca=$('meta[name="description"]').attr("content");if(ca!=null&&ca!=undefined){ua.setDescription(jQuery.trim(ca));ua.setUserMessage(jQuery.trim(ca));}}
ua.addMediaItem({type:'image',src:'http://dem5xqcn61lj8.cloudfront.net/FlightStats2/flightstats-200x200.png'});var da={userAction:ua,shareButtons:[{provider:'share',tooltip:'Share',enableCount:false},{provider:'facebook',tooltip:'Share on Facebook',enableCount:false,iconOnly:true},{provider:'twitter',tooltip:'Tweet',enableCount:false,iconOnly:true},{provider:'linkedin',tooltip:'Post on LinkedIn',enableCount:false,iconOnly:true},{provider:'email',tooltip:'Email this',enableCount:false,iconOnly:true}],containerID:'socialShareButtonDiv'};gigya.socialize.showShareBarUI(da);}
function fsLogout(){gigya.socialize.logout();}
function initSocial(){gigya.socialize.addEventHandlers({onLogout:socialLogoutHandler});}
function initFollowBar(){var ea={containerID:'headerShareSocialLinks',iconSize:22,buttons:[{provider:'facebook',actionURL:'https://www.facebook.com/pages/FlightStats/6305094086',action:'dialog'},{provider:'twitter',title:'',action:'dialog',followUsers:'flightstats'},{provider:'linkedin',actionURL:'http://www.linkedin.com/company/flightstats-inc-'}]};gigya.socialize.showFollowBarUI(ea);}
initSocial();