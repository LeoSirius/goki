(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{395:function(e,t,n){},763:function(e,t,n){},765:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),o=n.n(r),i=n(34),s=n.n(i),c=n(38),l=n(43),d=n(45),u=n(44),p=n(771),h=n(94),j=p.a.Header,b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.repoList;return Object(a.jsxs)(j,{className:"header",children:[Object(a.jsx)("div",{className:"logo"}),t.length>0&&Object(a.jsx)(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[String(t[0].id)],children:t.map((function(t){return Object(a.jsx)(h.a.Item,{onClick:function(){return e.props.updateCurRepoID(t.id)},children:t.name},t.id)}))})]})}}]),n}(o.a.Component),m=h.a.SubMenu,f=(p.a.Header,p.a.Content,p.a.Sider),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).selectFile=function(e){r.props.updateCurFilePath(e.path_in_repo)},r.renderTree=function(e){return e.filter((function(e){return"."!==e.name[0]})).map((function(e){return e.is_dir?Object(a.jsx)(m,{title:e.name,children:e.children&&e.children.length>0&&r.renderTree(e.children)},e.path_in_repo):Object(a.jsx)(h.a.Item,{onClick:function(){return r.selectFile(e)},children:e.name},e.path_in_repo)}))},r.state={direntTree:[]},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.direntTree;return console.log("direntTree = ",e),Object(a.jsx)(f,{width:300,className:"site-layout-background",children:Object(a.jsx)(h.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:e.length>0&&this.renderTree(e)})})}}]),n}(o.a.Component),g=n(246),v=n.n(g),x=n(247),y=n.n(x),C=n(781),R=n(772),k=(n(395),h.a.SubMenu,p.a.Header,p.a.Content),w=(p.a.Sider,function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).flatten=function(e,t){return"string"===typeof t?e+t:o.a.Children.toArray(t.props.children).reduce(a.flatten,e)},a.HeadingRenderer=function(e){var t=o.a.Children.toArray(e.children).reduce(a.flatten,""),n=encodeURIComponent(t);return o.a.createElement("h"+e.level,{id:n},e.children)},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.fileContent;return Object(a.jsx)(k,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:window.innerHeight,backgroundColor:"white"},children:Object(a.jsx)(v.a,{className:"markdown-body",source:e,plugins:[y.a],renderers:{heading:this.HeadingRenderer,code:function(e){var t=e.language,n=e.value;return Object(a.jsx)(C.a,{style:R.a,language:t,children:n,showLineNumbers:!0,showInlineLineNumbers:!0})}}})})}}]),n}(o.a.Component)),S=n(778),L=p.a.Sider,U=S.a.Link,D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).renderTOC=function(e){return e.map((function(e){return e.children&&e.children.length>0?Object(a.jsx)(U,{href:"#"+encodeURIComponent(e.name),title:e.name,children:r.renderTOC(e.children)}):Object(a.jsx)(U,{href:"#"+encodeURIComponent(e.name),title:e.name})}))},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.toc;return Object(a.jsx)(L,{width:200,className:"site-layout-background",children:Object(a.jsx)(h.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:Object(a.jsx)(S.a,{children:this.renderTOC(e)})})})}}]),n}(o.a.Component),T=n(249),I=n.n(T),M=n(161),F=n.n(M),N="http://39.106.229.224",A=I.a.create(),P={login:function(e,t,n){var a=N+"/login2?next="+n,r=new F.a;return r.append("username",e),r.append("password",t),A.post(a,r)},adminListRepos:function(e,t){return A.get("http://39.106.229.224/api/v1/admin/repos")},adminAddRepo:function(e,t){var n=new F.a;return n.append("name",e),n.append("url",t),A.post("http://39.106.229.224/api/v1/admin/repos",n)},adminUpdateRepo:function(e,t,n){var a=N+"/api/v1/admin/repos/"+e,r=new F.a;return""!==t&&r.append("name",t),""!==n&&r.append("url",n),A.put(a,r)},adminDeleteRepo:function(e){var t=N+"/api/v1/admin/repos/"+e;return A.delete(t)},listRepos:function(){return A.get("http://39.106.229.224/api/v1/repos/")},getRepoDirentTree:function(e){var t=N+"/api/v1/repos/"+e+"/dirent-tree";return A.get(t)},getRepoFile:function(e,t){var n=N+"/api/v1/repos/"+e+"/file",a={path:t};return A.get(n,{params:a})},getGithubMarkdownRendered:function(e){console.log("fileString = ",e);var t={text:e};return A.post("https://api.github.com/markdown",t)}},E=p.a.Footer,_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).updateContent=function(){var e=a.state,t=e.curRepoID,n=e.curFilePath;P.getRepoFile(t,n).then((function(e){var t=e.data.content;if(!n.endsWith(".md")){var r=n.split(".");t="```"+r[r.length-1]+"\n"+t+"\n```"}var o=[];e.data.toc.filter((function(e){return 2===e.level||3===e.level})).map((function(e){if(2===e.level){var t=e;return t.children=[],void o.push(t)}3!==e.level||o[o.length-1].children.push(e)})),a.setState({fileContent:t,toc:o})}))},a.updateDirentTree=function(){var e=a.state.curRepoID;P.getRepoDirentTree(e).then((function(e){a.setState({direntTree:e.data.dirent_tree})}))},a.updateCurFilePath=function(e){console.log("in updateCurFilePath newPath = ",e),a.setState({curFilePath:e},(function(){a.updateContent()}))},a.updateCurRepoID=function(e){a.setState({curRepoID:e},(function(){a.updateContent(),a.updateDirentTree()}))},a.state={repoList:[],curRepoID:0,curFilePath:"README.md",direntTree:[],toc:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;P.listRepos().then((function(t){e.setState({repoList:t.data.repo_list,curRepoID:t.data.repo_list.length>0?t.data.repo_list[0].id:0},(function(){e.updateContent(),e.updateDirentTree()}))})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state,t=e.repoList,n=e.curRepoID,r=e.fileContent,o=e.direntTree,i=e.toc;return Object(a.jsxs)(p.a,{children:[Object(a.jsx)(b,{curRepoID:n,repoList:t,updateCurRepoID:this.updateCurRepoID}),Object(a.jsxs)(p.a,{children:[n>0&&Object(a.jsx)(O,{updateCurFilePath:this.updateCurFilePath,curRepoID:n,direntTree:o}),Object(a.jsx)(p.a,{style:{padding:"0 24px 24px"},children:n>0&&Object(a.jsx)(w,{fileContent:r})}),n>0&&Object(a.jsx)(D,{toc:i})]}),Object(a.jsx)(E,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})}}]),n}(o.a.Component),H=n(126),K=n(83),B=n(782),q=n(776),z=n(779),J=n(50),G={labelCol:{span:8},wrapperCol:{span:8}},V={wrapperCol:{offset:8,span:8}},W=function(){var e=Object(r.useState)(!1),t=Object(K.a)(e,2),n=t[0],o=t[1];return n?Object(a.jsx)(B.a,{to:"/admin"}):Object(a.jsxs)(q.a,Object(H.a)(Object(H.a)({},G),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){var t=new URLSearchParams(window.location.search).get("next"),n=e.username,a=e.password;P.login(n,a,t).then((function(e){o(!0)})).catch((function(e){}))},onFinishFailed:function(e){console.log("Failed:",e)},style:{marginTop:"100px"},children:[Object(a.jsx)(q.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(a.jsx)(z.a,{})}),Object(a.jsx)(q.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(a.jsx)(z.a.Password,{})}),Object(a.jsx)(q.a.Item,Object(H.a)(Object(H.a)({},V),{},{children:Object(a.jsx)(J.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))},Q=n(780),X=n(188),Y=n(775),Z=n(272),$=n(784),ee=n(777),te=n(773),ne=n(774),ae=n(783),re={getErrMsg:function(e){return e.response?e.response.data&&e.response.data.message?e.response.data.message:e.response.statusText:"network error"}},oe=p.a.Header,ie=function(e){var t=o.a.useState(!1),n=Object(K.a)(t,2),r=n[0],i=n[1],s=o.a.useState(!1),c=Object(K.a)(s,2),l=c[0],d=c[1],u=o.a.useState(""),p=Object(K.a)(u,2),h=p[0],j=p[1],b=o.a.useState(""),m=Object(K.a)(b,2),f=m[0],O=m[1],g=o.a.useState(""),v=Object(K.a)(g,2),x=v[0],y=v[1];return Object(a.jsxs)(oe,{className:"site-layout-background",style:{paddingLeft:"20px"},children:[Object(a.jsx)(J.a,{type:"primary",onClick:function(){i(!0)},children:"Add"}),Object(a.jsxs)(ee.a,{title:"Add a git repository",visible:r,onOk:function(){""!==f&&""!==h?(d(!0),P.adminAddRepo(h,f).then((function(t){e.addRepo(t.data),i(!1),d(!1),Z.a.success({message:"repository added"})})).catch((function(e){Z.a.error({message:re.getErrMsg(e)})}))):y("name and url are required")},confirmLoading:l,onCancel:function(){i(!1)},children:[Object(a.jsxs)(te.a,{children:[Object(a.jsx)(ne.a,{span:3,children:"name"}),Object(a.jsx)(ne.a,{span:20,children:Object(a.jsx)(z.a,{onChange:function(e){j(e.target.value),y("")},value:h,placeholder:"display name",style:{marginBottom:"10px"}})})]}),Object(a.jsxs)(te.a,{children:[Object(a.jsx)(ne.a,{span:3,children:"url"}),Object(a.jsx)(ne.a,{span:20,children:Object(a.jsx)(z.a,{onChange:function(e){O(e.target.value),y("")},value:f,placeholder:"url of git repo"})})]}),x&&Object(a.jsx)(ae.a,{message:x,type:"error",style:{marginTop:"15px"}})]})]})},se=function e(t){Object(c.a)(this,e);var n=new Object;return n.key=t.id,n.name=t.name,n.url=t.url,n},ce=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).updateRepo=function(){var e=a.state,t=e.repoName,n=e.repoURL;a.props.updateRepo(a.props.repoToUpdate.key,t,n)},a.handleNameChange=function(e){a.setState({repoName:e.target.value,errMsg:""})},a.handleRepoURLChange=function(e){a.setState({repoURL:e.target.value,errMsg:""})},a.state={repoName:"",repoURL:"",errMsg:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("in mounttututut this.props = ",this.props),this.setState({repoName:this.props.repoToUpdate.name,repoURL:this.props.repoToUpdate.url})}},{key:"render",value:function(){console.log("renrenrnernenrender"),console.log("this.state = ",this.state);var e=this.state,t=e.repoName,n=e.repoURL,r=e.errMsg;return Object(a.jsx)("div",{children:Object(a.jsxs)(ee.a,{title:"Update a git repository",visible:this.props.visible,onOk:this.updateRepo,confirmLoading:this.props.confirmLoading,onCancel:this.props.onCancel,children:[Object(a.jsxs)(te.a,{children:[Object(a.jsx)(ne.a,{span:3,children:"name"}),Object(a.jsx)(ne.a,{span:20,children:Object(a.jsx)(z.a,{onChange:this.handleNameChange,value:t,style:{marginBottom:"10px"}})})]}),Object(a.jsxs)(te.a,{children:[Object(a.jsx)(ne.a,{span:3,children:"url"}),Object(a.jsx)(ne.a,{span:20,children:Object(a.jsx)(z.a,{onChange:this.handleRepoURLChange,value:n})})]}),r&&Object(a.jsx)(ae.a,{message:r,type:"error",style:{marginTop:"15px"}})]})})}}]),n}(o.a.Component),le=Y.a.Column,de=p.a.Content,ue=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).addRepo=function(e){a.setState({repoList:[].concat(Object(X.a)(a.state.repoList),[new se(e)])})},a.deleteRepo=function(e){P.adminDeleteRepo(e.key).then((function(t){var n=a.state.repoList.filter((function(t){return t.key!==e.key}));a.setState({repoList:n}),Z.a.success({message:"repository deleted"})})).catch((function(e){console.log(e),Z.a.error({message:re.getErrMsg(e)})}))},a.updateRepo=function(e,t,n){P.adminUpdateRepo(e,t,n).then((function(t){var n=new se(t.data),r=Object(X.a)(a.state.repoList);r.forEach((function(t){t.key===e&&(t.name=n.name,t.url=n.url)})),a.setState({repoList:r,isShowUpdateRepo:!1,modalUpdateConfirmLoading:!1}),Z.a.success({message:"repository updated"})})).catch((function(e){Z.a.error({message:re.getErrMsg(e)})}))},a.cancelUpdateModal=function(){console.log("in cancal"),a.setState({isShowUpdateRepo:!1})},a.showModalUpdateRepo=function(e){a.setState({repoToUpdate:e},(function(){a.setState({isShowUpdateRepo:!0})}))},a.state={repoList:[],isShowUpdateRepo:!1,modalUpdateConfirmLoading:!1,repoToUpdate:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;P.adminListRepos(0,0).then((function(t){e.setState({repoList:t.data.repo_list.map((function(e){return new se(e)}))})})).catch((function(e){Z.a.error({message:re.getErrMsg(e)})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.repoList,r=t.isShowUpdateRepo,o=t.modalUpdateConfirmLoading,i=t.repoToUpdate;return Object(a.jsxs)("div",{children:[Object(a.jsx)(ie,{addRepo:this.addRepo}),Object(a.jsx)(de,{style:{margin:"0 16px",paddingTop:"20px"},children:Object(a.jsxs)(Y.a,{dataSource:n,pagination:!1,children:[Object(a.jsx)(le,{title:"Name",dataIndex:"name"},"name"),Object(a.jsx)(le,{title:"URL",dataIndex:"url"},"url"),Object(a.jsx)(le,{title:"Action",render:function(t,n){return Object(a.jsxs)($.b,{size:"middle",children:[Object(a.jsx)("a",{onClick:function(){return e.showModalUpdateRepo(t)},children:"Update"}),Object(a.jsx)("a",{onClick:function(){return e.deleteRepo(t)},children:"Delete"})]},t.key)}},"action")]})}),r&&Object(a.jsx)(ce,{visible:r,updateRepo:this.updateRepo,confirmLoading:o,onCancel:this.cancelUpdateModal,repoToUpdate:i})]})}}]),n}(o.a.Component),pe=(n(763),p.a.Footer),he=p.a.Sider,je=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1},e.onCollapse=function(t){console.log(t),e.setState({collapsed:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.collapsed;return Object(a.jsxs)(p.a,{style:{minHeight:"100vh"},children:[Object(a.jsxs)(he,{collapsible:!0,collapsed:e,onCollapse:this.onCollapse,children:[Object(a.jsx)("div",{className:"admin-logo"}),Object(a.jsx)(h.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:Object(a.jsx)(h.a.Item,{icon:Object(a.jsx)(Q.a,{}),children:"Repositories"},"1")})]}),Object(a.jsxs)(p.a,{className:"site-layout",children:[Object(a.jsx)(ue,{}),Object(a.jsx)(pe,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})]})}}]),n}(o.a.Component),be=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={route:window.location.pathname},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){e.setState({route:window.location.pathname})}))}},{key:"render",value:function(){var e;switch(console.log("this.staete = ",this.state),this.state.route){case"/":e=_;break;case"/admin":e=je;break;case"/login":e=W;break;default:e=_}return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(e,{})})}}]),n}(o.a.Component),me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,785)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};n(764);s.a.render(Object(a.jsx)(be,{}),document.getElementById("root")),me()}},[[765,1,2]]]);
//# sourceMappingURL=main.37c89c3c.chunk.js.map