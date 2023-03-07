(self.webpackChunkdashboard_app=self.webpackChunkdashboard_app||[]).push([[4744],{"./src/components/molecules/DescriptionField/stories/DescriptionField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>DescriptionField_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),theme=__webpack_require__("./src/config/theme.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DescriptionField_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/molecules/DescriptionField/DescriptionField.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DescriptionField_module.Z,options);const DescriptionField_DescriptionField_module=DescriptionField_module.Z&&DescriptionField_module.Z.locals?DescriptionField_module.Z.locals:void 0;var __jsx=react.createElement,DescriptionField=function DescriptionField(_ref){var label=_ref.label,onChange=_ref.onChange,onError=_ref.onError,value=_ref.value,placeholder=_ref.placeholder,_useState=(0,react.useState)(""),setInputValue=(_useState[0],_useState[1]);return __jsx("div",{className:"flex justify-center"},__jsx("div",{className:" m-10"},__jsx("div",{className:"relative"},__jsx("label",{className:DescriptionField_DescriptionField_module.label},label),__jsx("div",{className:"border border-neutral-500 rounded h-[190px]  "},__jsx("textarea",{defaultValue:value,onChange:function handleChange(event){var newValue=event.target.value;setInputValue(newValue),onChange&&onChange(newValue),10===newValue.length?null==onError||onError("Description is too long"):null==onError||onError("")},placeholder,className:(0,clsx_m.Z)("h-[188px] w-[356px] p-4 'text-shades-black' rounded focus:outline-none",theme.r.fonts.text.base)})))))};DescriptionField.displayName="DescriptionField",DescriptionField.__docgenInfo={description:"",methods:[],displayName:"DescriptionField"};const DescriptionField_DescriptionField=DescriptionField;try{FunctionComponent.displayName="DescriptionField",FunctionComponent.__docgenInfo={description:"",displayName:"DescriptionField",props:{onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((message: string) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: string) => void)"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/DescriptionField/DescriptionField.tsx#DescriptionField"]={docgenInfo:DescriptionField.__docgenInfo,name:"DescriptionField",path:"src/components/molecules/DescriptionField/DescriptionField.tsx#DescriptionField"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,DescriptionField_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const DescriptionField_stories={title:"Molecules/DescriptionField",component:DescriptionField_DescriptionField,argTypes:{onChange:{action:"changed"},onError:{action:"onError"}}};var Template=function Template(args){return DescriptionField_stories_jsx(DescriptionField_DescriptionField,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={value:"",label:"Description",placeholder:"Text here..."},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"(args: DescriptionFieldProps) => <DescriptionField {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./src/config/fonts.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>fonts});var fonts={text:{xs:"text-[8px] leading-[16px]",sm:"text-[10px] leading-[16px]",md:"text-[12px] leading-[16px]",base:"text-[14px] leading-[24px]",lg:"text-[16px] leading-[24px]",xl:"text-[18px] leading-[24px]","2xl":"text-[24px] leading-[40px]"},headings:{lg:"text-[64px] leading-[80px]",base:"text-[40px] leading-[56px]",md:"text-[40px] leading-[48px]",sm:"text-[32px] leading-[48px]"},fontWeights:{light:"font-light",regular:"font-normal"}}},"./src/config/shadows.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>shadowVariants,q:()=>shadows});var shadows={sm:"0px 0px 88px -24px rgba(0, 0, 0, 0.08)",md:"0px 8px 24px rgba(0, 0, 0, 0.04)",lg:"0px 0px 64px -24px rgba(0, 0, 0, 0.16)"},shadowVariants={sm:"shadow-small",md:"shadow-medium",lg:"shadow-large"}},"./src/config/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>theme});var resolveConfig=__webpack_require__("./node_modules/tailwindcss/resolveConfig.js"),resolveConfig_default=__webpack_require__.n(resolveConfig),tailwind_config=__webpack_require__("./tailwind.config.js"),tailwind_config_default=__webpack_require__.n(tailwind_config),fonts=__webpack_require__("./src/config/fonts.ts"),shadows=__webpack_require__("./src/config/shadows.ts"),theme={colors:resolveConfig_default()(tailwind_config_default()).theme.colors,fonts:fonts.R,shadows:shadows.q,gradients:{linear:"linear-gradient(180deg, rgba(0, 0, 0, 0.81) 0%, rgba(0, 0, 0, 0.31) 100%)",radial:"radial-gradient(132.05% 565.8% at 100.19% -24.57%, #FFFFFF 0%, rgba(71, 68, 68, 0) 100%)"}}},"./tailwind.config.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/tailwindcss/defaultTheme.js").fontFamily;module.exports={content:["./app/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./src/**/*.{js,ts,jsx,tsx}"],theme:{colors:{neutral:{100:"#f8f8f8",200:"#f0f0f0",300:"#e8e8e8",400:"#d8d8d8",500:"#cccccc",600:"#999999",700:"#666666"},shades:{black:"#333333",white:"#ffffff"},accent:{a:{100:"#e8a973",200:"#df8e4e"},b:{100:"#edf7f7",200:"#77d5d3"},c:{100:"#f8f8f8"}},success:{100:"#dcefe2",200:"#64b980"},error:{100:"#c55757"}},fontSize:{normal:"32px"},extend:{boxShadow:{small:"0px 0px 88px -24px rgba(0, 0, 0, 0.08)",medium:"0px 8px 24px rgba(0, 0, 0, 0.04)",large:"0px 0px 64px -24px rgba(0, 0, 0, 0.16)",extra:"0px 0px 30px rgba(0, 0, 0, 0.15)"},fontFamily:{sans:["var(--font-primary)","sans-serif"]}}},plugins:[]}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/molecules/DescriptionField/DescriptionField.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".DescriptionField_label__CepQj {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(255 255 255 / var(--tw-bg-opacity));\n\t--tw-text-opacity: 1;\n\tcolor: rgb(51 51 51 / var(--tw-text-opacity));\n\tpadding: 0 4px;\n\tfont-size: 12px;\n\tfont-weight: 300;\n\ttransform-origin: top left;\n\tposition: absolute;\n\ttransform: translate(16px, -8px);\n}\ninput:focus-visible {\n\toutline: 1px dashed transparent;\n}\ntextarea {\n\tresize: none;\n}\n","",{version:3,sources:["webpack://./src/components/molecules/DescriptionField/DescriptionField.module.css"],names:[],mappings:"AACC;CAAA,kBAAwC;CAAxC,yDAAwC;CAAxC,oBAAwC;CAAxC,6CAAwC;CACxC,cAAc;CACd,eAAe;CACf,gBAAgB;CAChB,0BAA0B;CAC1B,kBAAkB;CAClB;AANwC;AAQzC;CACC,+BAA+B;AAChC;AACA;CACC,YAAY;AACb",sourcesContent:[".label {\n\t@apply bg-shades-white text-shades-black;\n\tpadding: 0 4px;\n\tfont-size: 12px;\n\tfont-weight: 300;\n\ttransform-origin: top left;\n\tposition: absolute;\n\ttransform: translate(16px, -8px);\n}\ninput:focus-visible {\n\toutline: 1px dashed transparent;\n}\ntextarea {\n\tresize: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={label:"DescriptionField_label__CepQj"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);