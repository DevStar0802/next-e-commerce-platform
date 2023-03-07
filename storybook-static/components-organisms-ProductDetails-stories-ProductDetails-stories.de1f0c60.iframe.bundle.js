"use strict";(self.webpackChunkdashboard_app=self.webpackChunkdashboard_app||[]).push([[440],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/organisms/ProductDetails/stories/ProductDetails.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>ProductDetails_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),fonts=__webpack_require__("./src/config/fonts.ts"),Button=__webpack_require__("./src/components/molecules/Button/index.tsx"),Icon=__webpack_require__("./src/components/molecules/Icon/index.tsx"),Badge=__webpack_require__("./src/components/molecules/Badge/index.tsx"),ListPrices=__webpack_require__("./src/components/organisms/ProductDetails/ListPrices.tsx"),__jsx=react.createElement,ProductDetails=function ProductDetails(_ref){var productImages=_ref.productImages,priceList=_ref.priceList,description=_ref.description,colors=_ref.colors,tags=_ref.tags,specifications=_ref.specifications;return __jsx("div",{className:"flex flex-wrap gap-8"},__jsx("div",{className:"h-fit"},__jsx("div",{className:"flex w-full max-w-[736px] flex-wrap gap-1"},productImages.map((function(item,index){return __jsx(image_default(),{key:index,src:item,alt:"products",className:"h-full max-h-[366px] w-[366px] rounded"})})),__jsx("div",{className:"flex h-full h-[366px] w-full max-w-[366px] m-auto justify-center"},__jsx("div",{className:"flex h-[304px] w-full max-w-[304px] m-auto bg-neutral-400 items-center justify-center rounded"},__jsx("div",{className:"text-center"},__jsx(Icon.J,{name:"icon-image",className:"text-neutral-600"}),__jsx(Button.z,{variant:"outlined",className:(0,clsx_m.Z)("mt-6 h-8 max-w-[76px] !text-neutral-800 !border-neutral-600",fonts.R.text.md)},"Upload")))))),__jsx("div",{className:"w-full max-w-[352px]"},__jsx("div",null,null==priceList?void 0:priceList.map((function(item,index){return __jsx(ListPrices.Z,{key:index,items:item.list,currency:item.currency})}))),__jsx("p",{className:(0,clsx_m.Z)("mt-3 font-light text-shades-black tracking-[0.06em]",fonts.R.text.base)},description),__jsx("div",{className:"mt-6"},null==colors?void 0:colors.map((function(color){return __jsx("div",{key:color,className:"h-8 w-8 rounded border-2 border-shades-white",style:color?{backgroundColor:color}:{}})}))),__jsx("div",null,null==tags?void 0:tags.map((function(tag){var _tag$list,_tag$list2;return __jsx("div",{key:tag.title,className:(0,clsx_m.Z)("flex mt-6 flex-wrap gap-x-4",(null==tag||null===(_tag$list=tag.list)||void 0===_tag$list?void 0:_tag$list.length)>1?"":"items-center")},__jsx("h4",{className:(0,clsx_m.Z)("w-[100px] text-shades-black font-light tracking-[0.06em]",fonts.R.text.sm)},tag.title),__jsx("div",{className:"flex flex-col gap-x-3 gap-y-2"},null==tag||null===(_tag$list2=tag.list)||void 0===_tag$list2?void 0:_tag$list2.map((function(item){return __jsx("div",{key:item},__jsx(Badge.C,{size:"xl"},item))}))))}))),__jsx("div",{className:"mt-6"},null==specifications?void 0:specifications.map((function(item){return __jsx("div",{key:item.value+item.label,className:"flex itms-center py-[6px] gap-x-4"},__jsx("h4",{className:(0,clsx_m.Z)("w-full max-w-[116px] text-neutral-600 font-light",fonts.R.text.sm)},item.label),__jsx("p",{className:(0,clsx_m.Z)("max-w-[205px] text-shades-black font-light tracking-[0.08em]",fonts.R.text.sm)},item.value))})))))};ProductDetails.displayName="ProductDetails",ProductDetails.__docgenInfo={description:"",methods:[],displayName:"ProductDetails"};const organisms_ProductDetails=ProductDetails;try{FunctionComponent.displayName="ProductDetails",FunctionComponent.__docgenInfo={description:"",displayName:"ProductDetails",props:{productImages:{defaultValue:null,description:"",name:"productImages",required:!0,type:{name:"string[] | StaticImageData[]"}},priceList:{defaultValue:null,description:"",name:"priceList",required:!1,type:{name:"{ currency?: string; isSmall?: boolean; list: { label: string; price: string; }[]; }[] | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"string[]"}},tags:{defaultValue:null,description:"",name:"tags",required:!0,type:{name:"{ title: string; list?: string[] | undefined; }[]"}},specifications:{defaultValue:null,description:"",name:"specifications",required:!0,type:{name:"{ label: string; value: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ProductDetails/index.tsx#ProductDetails"]={docgenInfo:ProductDetails.__docgenInfo,name:"ProductDetails",path:"src/components/organisms/ProductDetails/index.tsx#ProductDetails"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,ProductDetails_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const ProductDetails_stories={title:"Organisms/Product Details",component:organisms_ProductDetails};var Template=function Template(args){return ProductDetails_stories_jsx(organisms_ProductDetails,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={productImages:[{src:"static/media/product-1.00910a6b.png",height:1464,width:1464,blurDataURL:"static/media/product-1.00910a6b.png"},{src:"static/media/product-3.33632377.png",height:1464,width:1464,blurDataURL:"static/media/product-3.33632377.png"},{src:"static/media/product-2.1ab2ec3a.png",height:1464,width:1464,blurDataURL:"static/media/product-2.1ab2ec3a.png"}],priceList:[{currency:"USD",list:[{label:"Landed",price:"3,345.00"},{label:"Exworks",price:"2,876.00"},{label:"MSRP",price:"5,456.00"}]},{currency:"GBP",list:[{label:"Landed",price:"3,345.00"},{label:"Exworks",price:"2,876.00"},{label:"MSRP",price:"5,456.00"}]}],description:"The cimento vases exude the natural look of cement. Their refined shape presents a different perspective on a material known for its stiffness and inflexibility. Available in two sizes, narrow and wide.",colors:["#77502A"],tags:[{title:"Season",list:["SS23"]},{title:"Collections",list:["Spring Summer 23","Core"]}],specifications:[{label:"Made in",value:"Italy"},{label:"Style",value:"ERO21103"},{label:"Composition",value:"Cotton"},{label:"Material",value:"80% cotton, 20% polyester"},{label:"Composition",value:"100% Acetate"},{label:"Measurements",value:"26 - 32 inch"},{label:"Colors",value:"black, white, Grey, red, orange, yellow, blue, Green, Purple, pink"},{label:"Color Code",value:"BLCK, WHTE, GREY, REDD, ORNG, YLLW, BLUE, GREN, PRPL, PINK"},{label:"Color Family",value:"Black, Blue, Green, Grey, Orange, Pink, Purple, Red, Yellow, White"},{label:"Delivery start",value:"03/09/23"},{label:"Delivery end",value:"03/12/23"}]},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"(args: ProductDetailsProps) => <ProductDetails {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/molecules/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Badge});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),badgeSizeStyles={sm:"h-5 text-[8px] py-0 px-2",lg:"h-6 text-[10px] py-0 px-3",xl:"h-8 text-[12px] py-0 px-4"},_excluded=["size","children","className"],__jsx=react.createElement,Badge=function Badge(_ref){var size=_ref.size,children=_ref.children,className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("div",(0,esm_extends.Z)({className:(0,clsx_m.Z)("inline-flex text-[#333333] bg-[#F0F0F0] items-center box-border rounded-[100px]",badgeSizeStyles[size||"lg"],className)},props),children)};Badge.displayName="Badge",Badge.__docgenInfo={description:"",methods:[],displayName:"Badge"};try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"xl"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/molecules/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/molecules/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),buttonVariants={black:"bg-shades-black text-shades-white",white:"bg-shades-white text-shades-black",accent:"bg-accent-a-200 text-shades-white",neutral:"bg-neutral-400 text-shades-white"},outlinedButtonVariants={black:"border-[1px] border-shades-black text-shades-black hover:bg-shades-black hover:text-shades-white",white:"border-[1px] !border-shades-white !text-shades-white",accent:"border-[1px] !border-accent-a-200 !text-accent-a-200",neutral:"border-[1px] !border-neutral-400 !text-neutral-400"},buttonSize={sm:"text-xs py-0 px-4 h-8",md:"text-sm py-0 px-5 h-9",lg:"text-base py-0 px-6 h-10"},_excluded=["as","rounded","variant","color","size","children","className","label"],__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var Button=function Button(_ref){var as=_ref.as,rounded=_ref.rounded,variant=_ref.variant,color=_ref.color,size=_ref.size,children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,react.createElement)(as||"button",function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({className:(0,clsx_m.Z)("flex w-full max-w-[352px] font-normal cursor-pointer items-center justify-center border-0 mx-auto my-0 gap-x-2","outlined"!==variant?buttonVariants[color||"black"]:outlinedButtonVariants[color||"black"],buttonSize[size||"lg"],rounded?"rounded-[3rem]":"rounded",className)},props),__jsx(react.Fragment,null,label,children))};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{defaultValue:{value:'""',computed:!1},required:!1},label:{defaultValue:{value:'""',computed:!1},required:!1}}};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"button"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"outlined"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"black"'},{value:'"white"'},{value:'"accent"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"md"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: any) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/molecules/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/organisms/ProductDetails/ListPrices.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_config_fonts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/config/fonts.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,List=function List(_ref){var label=_ref.label,value=_ref.value,isSmall=_ref.isSmall;return __jsx("div",{className:isSmall?"mb-0":"mb-3"},__jsx("h4",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-neutral-800 tracking-[0.06em] font-light",_config_fonts__WEBPACK_IMPORTED_MODULE_1__.R.text[isSmall?"sm":"base"])},label),__jsx("p",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-neutral-600 tracking-[0.06em] font-light",_config_fonts__WEBPACK_IMPORTED_MODULE_1__.R.text[isSmall?"xs":"sm"],!isSmall&&"mt-1")},value))};List.displayName="List";var ListPrices=function ListPrices(_ref2){var currency=_ref2.currency,items=_ref2.items,_ref2$isSmall=_ref2.isSmall,isSmall=void 0!==_ref2$isSmall&&_ref2$isSmall;return __jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("flex",isSmall?"gap-x-3":"gap-x-[25px]")},currency&&__jsx(List,{label:currency,value:"currency",isSmall}),null==items?void 0:items.map((function(item,index){return __jsx(List,{key:index,label:item.price,value:item.label,isSmall})})))};ListPrices.displayName="ListPrices",ListPrices.__docgenInfo={description:"",methods:[],displayName:"ListPrices",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=ListPrices;try{FunctionComponent.displayName="ListPrices",FunctionComponent.__docgenInfo={description:"",displayName:"ListPrices",props:{currency:{defaultValue:null,description:"",name:"currency",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"{ label: string; price: string; }[]"}},isSmall:{defaultValue:{value:"false"},description:"",name:"isSmall",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ProductDetails/ListPrices.tsx#ListPrices"]={docgenInfo:ListPrices.__docgenInfo,name:"ListPrices",path:"src/components/organisms/ProductDetails/ListPrices.tsx#ListPrices"})}catch(__react_docgen_typescript_loader_error){}},"./src/config/fonts.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>fonts});var fonts={text:{xs:"text-[8px] leading-[16px]",sm:"text-[10px] leading-[16px]",md:"text-[12px] leading-[16px]",base:"text-[14px] leading-[24px]",lg:"text-[16px] leading-[24px]",xl:"text-[18px] leading-[24px]","2xl":"text-[24px] leading-[40px]"},headings:{lg:"text-[64px] leading-[80px]",base:"text-[40px] leading-[56px]",md:"text-[40px] leading-[48px]",sm:"text-[32px] leading-[48px]"},fontWeights:{light:"font-light",regular:"font-normal"}}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);