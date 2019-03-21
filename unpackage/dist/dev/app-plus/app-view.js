var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181221_syb_scopedata*/window.__wcc_version__='v0.5vv_20181221_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7ab1cea1'])
Z([3,'handleProxy'])
Z([a,[3,'_view data-v-25274fcc back-top '],[[2,'?:'],[[7],[3,'show']],[1,'show'],[1,'']]])
Z([[7],[3,'$k']])
Z([1,'7ab1cea1-0'])
Z([3,'_view data-v-25274fcc back-bg'])
Z([3,'_view data-v-25274fcc iconfont icon-shang'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5671bb67'])
Z([3,'_view data-v-7af61da0 goods-list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'goodslist']])
Z(z[2])
Z([3,'handleProxy'])
Z([3,'_view data-v-7af61da0 goods-item'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'5671bb67-0-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([3,'_view data-v-7af61da0 goods-item-wrapper'])
Z([3,'_view data-v-7af61da0 icon'])
Z([[6],[[7],[3,'item']],[3,'goods_short_title']])
Z([3,'_img data-v-7af61da0 img'])
Z([[6],[[7],[3,'item']],[3,'goods_pic']])
Z([3,'_view data-v-7af61da0 desc'])
Z([3,'_view data-v-7af61da0 title'])
Z([a,[[6],[[7],[3,'item']],[3,'goods_short_title']]])
Z([3,'_view data-v-7af61da0 row-price'])
Z([3,'_view data-v-7af61da0 goods-price'])
Z([a,[3,'原价 '],[[6],[[7],[3,'item']],[3,'goods_price']]])
Z([3,'_view data-v-7af61da0 goods-sales'])
Z([a,[3,'已售 '],[[6],[[7],[3,'item']],[3,'goods_sales']]])
Z([3,'_view data-v-7af61da0 row-coupon'])
Z([3,'_view data-v-7af61da0 quanhou'])
Z([a,[3,'券后 '],[[6],[[7],[3,'item']],[3,'quanhou_price']],[3,'元']])
Z([3,'_view data-v-7af61da0 coupon-price'])
Z([3,'_view data-v-7af61da0 coupon-price-left'])
Z([a,[[6],[[7],[3,'item']],[3,'coupon_price']]])
Z([3,'_view data-v-7af61da0 coupon-price-right'])
Z([3,'元券'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'40452e5e'])
Z([3,'_scroll-view data-v-0e4a3196 scroll-x'])
Z([3,'true'])
Z([3,'_view data-v-0e4a3196 item-wrapper'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'goodslist']])
Z(z[4])
Z([3,'handleProxy'])
Z([3,'_view data-v-0e4a3196 item'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'40452e5e-0-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([3,'_view data-v-0e4a3196 icon'])
Z([[6],[[7],[3,'item']],[3,'goods_short_title']])
Z([3,'_img data-v-0e4a3196 img'])
Z([[6],[[7],[3,'item']],[3,'goods_pic']])
Z([3,'_view data-v-0e4a3196 tip'])
Z([3,'_view data-v-0e4a3196 fl'])
Z([a,[[6],[[7],[3,'item']],[3,'goods_sales']],[3,'人已领']])
Z([3,'_view data-v-0e4a3196 fr'])
Z([a,[[6],[[7],[3,'item']],[3,'coupon_price']],[3,'元券']])
Z([3,'_view data-v-0e4a3196 desc'])
Z([3,'_view data-v-0e4a3196 title'])
Z([a,[[6],[[7],[3,'item']],[3,'goods_short_title']]])
Z([3,'_view data-v-0e4a3196 row-price'])
Z([3,'_view data-v-0e4a3196 goods-price'])
Z([a,[3,'原价 '],[[6],[[7],[3,'item']],[3,'goods_price']]])
Z([3,'_view data-v-0e4a3196 quanhou'])
Z([a,[3,'券后 '],[[6],[[7],[3,'item']],[3,'quanhou_price']],[3,'元']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4caa4ab9'])
Z([a,[3,'_view data-v-139aa1d0 someone-buy '],[[7],[3,'showAndHide']]])
Z([3,'_img data-v-139aa1d0 avator'])
Z([[7],[3,'src']])
Z([3,'_text data-v-139aa1d0 username'])
Z([a,[[6],[[6],[[6],[[7],[3,'data']],[[7],[3,'index']]],[3,'virtualUser']],[3,'userName']]])
Z([3,'_text data-v-139aa1d0 content'])
Z([a,[[6],[[6],[[7],[3,'data']],[[7],[3,'index']]],[3,'description']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2655d806'])
Z([3,'_view 2655d806 page-body'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'height']]],[1,'px']]])
Z([3,'_scroll-view 2655d806 nav-left'])
Z([[7],[3,'scrollLeftTop']])
Z([a,z[2][1],z[2][2]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'classifyData']])
Z(z[6])
Z([3,'handleProxy'])
Z([a,[3,'_view 2655d806 nav-left-item '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'categoryActive']]],[1,'active'],[1,'']]])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'2655d806-0-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z(z[10])
Z([3,'_scroll-view 2655d806 nav-right'])
Z(z[12])
Z([1,'2655d806-2'])
Z([[7],[3,'scrollTop']])
Z([a,z[2][1],z[2][2]])
Z(z[6])
Z([3,'foods'])
Z(z[8])
Z(z[6])
Z([3,'_view 2655d806 box'])
Z(z[14])
Z([3,'i'])
Z(z[7])
Z([[6],[[7],[3,'foods']],[3,'foods']])
Z(z[28])
Z(z[10])
Z([3,'_view 2655d806 nav-right-item'])
Z(z[12])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2655d806-1-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'i']]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'i']],[1,0]],[1,'first'],[1,'']])
Z([[7],[3,'i']])
Z([3,'_image 2655d806'])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([3,'_view 2655d806'])
Z([a,z[15][1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2655d806'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'220a2223'])
Z([3,'_view data-v-3ad97edc page-body'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'220a2223-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7ab1cea1'])
Z([3,'_view data-v-3ad97edc someone-buy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'220a2223-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4caa4ab9'])
Z([3,'_view data-v-3ad97edc search-wrapper'])
Z([3,'_view data-v-3ad97edc search'])
Z([3,'_view data-v-3ad97edc uni-icon uni-icon-search'])
Z([3,'_view data-v-3ad97edc placeholder'])
Z([3,'输入您需要的商品名称'])
Z([3,'_view data-v-3ad97edc swiper-wrapper'])
Z([1,true])
Z([3,'_swiper data-v-3ad97edc swiper'])
Z([1,1000])
Z(z[13])
Z([1,3000])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'banner']])
Z(z[18])
Z([3,'handleProxy'])
Z([3,'_swiper-item data-v-3ad97edc swiper-item'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'220a2223-0-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([3,'_img data-v-3ad97edc'])
Z([[6],[[7],[3,'item']],[3,'cms_image']])
Z(z[23])
Z(z[27])
Z([3,'http://img.kiwifruits.cn/index/lunbo-1.jpg'])
Z([3,'_view data-v-3ad97edc marquee-box'])
Z([3,'_view data-v-3ad97edc marquee-title'])
Z([3,'独家快报'])
Z([3,'_view data-v-3ad97edc marquee'])
Z([3,'欢迎来到【独家折扣】,这里每天汇总最新购物优惠券,实时更新优惠券信息,让您享受白菜价网购的快感,先领优惠券再下单享受折上折,各种大额优惠券让您领到手软,更有购物反独家币活动与代理分销活动呦！'])
Z([3,'_view data-v-3ad97edc banner'])
Z(z[22])
Z([3,'_view data-v-3ad97edc left'])
Z(z[24])
Z([1,'220a2223-1'])
Z(z[27])
Z([3,'widthFix'])
Z([3,'http://img.kiwifruits.cn/index/taoqianggou.jpg'])
Z([3,'_view data-v-3ad97edc right'])
Z(z[22])
Z([3,'_view data-v-3ad97edc top'])
Z(z[24])
Z([1,'220a2223-2'])
Z(z[27])
Z(z[43])
Z([3,'http://img.kiwifruits.cn/index/juhuasuan.jpg'])
Z([3,'_view data-v-3ad97edc bottom'])
Z(z[22])
Z([3,'_view data-v-3ad97edc bottom-left'])
Z(z[24])
Z([1,'220a2223-3'])
Z(z[27])
Z(z[43])
Z([3,'http://img.kiwifruits.cn/index/newgoods.jpg'])
Z(z[22])
Z([3,'_view data-v-3ad97edc bottom-right'])
Z(z[24])
Z([1,'220a2223-4'])
Z(z[27])
Z(z[43])
Z([3,'http://img.kiwifruits.cn/index/9kuai9.jpg'])
Z([3,'_view data-v-3ad97edc scroll-wrapper'])
Z([3,'_view data-v-3ad97edc title'])
Z([3,'_view data-v-3ad97edc h1-title'])
Z([3,'大家都在领'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'220a2223-4']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'40452e5e'])
Z(z[69])
Z(z[70])
Z([3,'每日精选'])
Z([3,'_text data-v-3ad97edc fr'])
Z([3,'每15分钟更新'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'220a2223-5']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5671bb67'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'220a2223'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/components/back-top.vue.wxml','/components/someone-buy.vue.wxml','/components/scroll-view-x.vue.wxml','/components/goods-list.vue.wxml','./components/back-top.vue.wxml','./components/goods-list.vue.wxml','./components/scroll-view-x.vue.wxml','./components/someone-buy.vue.wxml','./pages/classify/classify.vue.wxml','./pages/classify/classify.wxml','./classify.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
_ai(oB,x[2],e_,x[0],2,2)
_ai(oB,x[3],e_,x[0],3,2)
_ai(oB,x[4],e_,x[0],4,2)
oB.pop()
oB.pop()
oB.pop()
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1],x[2],x[3],x[4]],ic:[]}
d_[x[5]]={}
d_[x[5]]["7ab1cea1"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[5]+':7ab1cea1'
r.wxVkey=b
gg.f=$gdc(f_["./components/back-top.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[5]);return}
p_[b]=true
try{
cs.push("./components/back-top.vue.wxml:view:1:27")
var oB=_mz(z,'view',['bindtap',1,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/back-top.vue.wxml:view:1:170")
var xC=_n('view')
_rz(z,xC,'class',5,e,s,gg)
cs.push("./components/back-top.vue.wxml:view:1:214")
var oD=_n('view')
_rz(z,oD,'class',6,e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[5]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
d_[x[6]]["5671bb67"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[6]+':5671bb67'
r.wxVkey=b
gg.f=$gdc(f_["./components/goods-list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
cs.push("./components/goods-list.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/goods-list.vue.wxml:view:1:74")
var oD=function(cF,fE,hG,gg){
cs.push("./components/goods-list.vue.wxml:view:1:74")
var cI=_mz(z,'view',['bindtap',6,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],cF,fE,gg)
cs.push("./components/goods-list.vue.wxml:view:1:297")
var oJ=_n('view')
_rz(z,oJ,'class',11,cF,fE,gg)
cs.push("./components/goods-list.vue.wxml:view:1:352")
var lK=_n('view')
_rz(z,lK,'class',12,cF,fE,gg)
cs.push("./components/goods-list.vue.wxml:image:1:393")
var aL=_mz(z,'image',['lazyLoad',-1,'alt',13,'class',1,'src',2],[],cF,fE,gg)
cs.pop()
_(lK,aL)
cs.pop()
_(oJ,lK)
cs.push("./components/goods-list.vue.wxml:view:1:516")
var tM=_n('view')
_rz(z,tM,'class',16,cF,fE,gg)
cs.push("./components/goods-list.vue.wxml:view:1:557")
var eN=_n('view')
_rz(z,eN,'class',17,cF,fE,gg)
var bO=_oz(z,18,cF,fE,gg)
_(eN,bO)
cs.pop()
_(tM,eN)
cs.push("./components/goods-list.vue.wxml:view:1:632")
var oP=_n('view')
_rz(z,oP,'class',19,cF,fE,gg)
cs.push("./components/goods-list.vue.wxml:view:1:678")
var xQ=_n('view')
_rz(z,xQ,'class',20,cF,fE,gg)
var oR=_oz(z,21,cF,fE,gg)
_(xQ,oR)
cs.pop()
_(oP,xQ)
cs.push("./components/goods-list.vue.wxml:view:1:760")
var fS=_n('view')
_rz(z,fS,'class',22,cF,fE,gg)
var cT=_oz(z,23,cF,fE,gg)
_(fS,cT)
cs.pop()
_(oP,fS)
cs.pop()
_(tM,oP)
cs.push("./components/goods-list.vue.wxml:view:1:849")
var hU=_n('view')
_rz(z,hU,'class',24,cF,fE,gg)
cs.push("./components/goods-list.vue.wxml:view:1:896")
var oV=_n('view')
_rz(z,oV,'class',25,cF,fE,gg)
var cW=_oz(z,26,cF,fE,gg)
_(oV,cW)
cs.pop()
_(hU,oV)
cs.push("./components/goods-list.vue.wxml:view:1:979")
var oX=_n('view')
_rz(z,oX,'class',27,cF,fE,gg)
cs.push("./components/goods-list.vue.wxml:view:1:1028")
var lY=_n('view')
_rz(z,lY,'class',28,cF,fE,gg)
var aZ=_oz(z,29,cF,fE,gg)
_(lY,aZ)
cs.pop()
_(oX,lY)
cs.push("./components/goods-list.vue.wxml:view:1:1110")
var t1=_n('view')
_rz(z,t1,'class',30,cF,fE,gg)
var e2=_oz(z,31,cF,fE,gg)
_(t1,e2)
cs.pop()
_(oX,t1)
cs.pop()
_(hU,oX)
cs.pop()
_(tM,hU)
cs.pop()
_(oJ,tM)
cs.pop()
_(cI,oJ)
cs.pop()
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,4,oD,e,s,gg,xC,'item','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[6]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
d_[x[7]]["40452e5e"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[7]+':40452e5e'
r.wxVkey=b
gg.f=$gdc(f_["./components/scroll-view-x.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
cs.push("./components/scroll-view-x.vue.wxml:scroll-view:1:27")
var oB=_mz(z,'scroll-view',['class',1,'scrollX',1],[],e,s,gg)
cs.push("./components/scroll-view-x.vue.wxml:view:1:102")
var xC=_n('view')
_rz(z,xC,'class',3,e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./components/scroll-view-x.vue.wxml:view:1:151")
var fE=function(hG,cF,oH,gg){
cs.push("./components/scroll-view-x.vue.wxml:view:1:151")
var oJ=_mz(z,'view',['bindtap',8,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],hG,cF,gg)
cs.push("./components/scroll-view-x.vue.wxml:view:1:368")
var lK=_n('view')
_rz(z,lK,'class',13,hG,cF,gg)
cs.push("./components/scroll-view-x.vue.wxml:image:1:409")
var aL=_mz(z,'image',['lazyLoad',-1,'alt',14,'class',1,'src',2],[],hG,cF,gg)
cs.pop()
_(lK,aL)
cs.pop()
_(oJ,lK)
cs.push("./components/scroll-view-x.vue.wxml:view:1:532")
var tM=_n('view')
_rz(z,tM,'class',17,hG,cF,gg)
cs.push("./components/scroll-view-x.vue.wxml:view:1:572")
var eN=_n('view')
_rz(z,eN,'class',18,hG,cF,gg)
var bO=_oz(z,19,hG,cF,gg)
_(eN,bO)
cs.pop()
_(tM,eN)
cs.push("./components/scroll-view-x.vue.wxml:view:1:647")
var oP=_n('view')
_rz(z,oP,'class',20,hG,cF,gg)
var xQ=_oz(z,21,hG,cF,gg)
_(oP,xQ)
cs.pop()
_(tM,oP)
cs.pop()
_(oJ,tM)
cs.push("./components/scroll-view-x.vue.wxml:view:1:727")
var oR=_n('view')
_rz(z,oR,'class',22,hG,cF,gg)
cs.push("./components/scroll-view-x.vue.wxml:view:1:768")
var fS=_n('view')
_rz(z,fS,'class',23,hG,cF,gg)
var cT=_oz(z,24,hG,cF,gg)
_(fS,cT)
cs.pop()
_(oR,fS)
cs.push("./components/scroll-view-x.vue.wxml:view:1:843")
var hU=_n('view')
_rz(z,hU,'class',25,hG,cF,gg)
cs.push("./components/scroll-view-x.vue.wxml:view:1:889")
var oV=_n('view')
_rz(z,oV,'class',26,hG,cF,gg)
var cW=_oz(z,27,hG,cF,gg)
_(oV,cW)
cs.pop()
_(hU,oV)
cs.push("./components/scroll-view-x.vue.wxml:view:1:971")
var oX=_n('view')
_rz(z,oX,'class',28,hG,cF,gg)
var lY=_oz(z,29,hG,cF,gg)
_(oX,lY)
cs.pop()
_(hU,oX)
cs.pop()
_(oR,hU)
cs.pop()
_(oJ,oR)
cs.pop()
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,6,fE,e,s,gg,oD,'item','index','index')
cs.pop()
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[7]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
d_[x[8]]["4caa4ab9"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[8]+':4caa4ab9'
r.wxVkey=b
gg.f=$gdc(f_["./components/someone-buy.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
cs.push("./components/someone-buy.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/someone-buy.vue.wxml:image:1:91")
var xC=_mz(z,'image',['alt',-1,'class',2,'src',1],[],e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./components/someone-buy.vue.wxml:text:1:160")
var oD=_n('text')
_rz(z,oD,'class',4,e,s,gg)
var fE=_oz(z,5,e,s,gg)
_(oD,fE)
cs.pop()
_(oB,oD)
cs.push("./components/someone-buy.vue.wxml:text:1:248")
var cF=_n('text')
_rz(z,cF,'class',6,e,s,gg)
var hG=_oz(z,7,e,s,gg)
_(cF,hG)
cs.pop()
_(oB,cF)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[8]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
d_[x[9]]["2655d806"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[9]+':2655d806'
r.wxVkey=b
gg.f=$gdc(f_["./pages/classify/classify.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
cs.push("./pages/classify/classify.vue.wxml:view:1:27")
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
cs.push("./pages/classify/classify.vue.wxml:scroll-view:1:105")
var xC=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'class',3,'scrollTop',1,'style',2],[],e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./pages/classify/classify.vue.wxml:view:1:258")
var fE=function(hG,cF,oH,gg){
cs.push("./pages/classify/classify.vue.wxml:view:1:258")
var oJ=_mz(z,'view',['bindtap',10,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],hG,cF,gg)
var lK=_oz(z,15,hG,cF,gg)
_(oJ,lK)
cs.pop()
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,8,fE,e,s,gg,oD,'item','index','index')
cs.pop()
cs.pop()
_(oB,xC)
cs.push("./pages/classify/classify.vue.wxml:scroll-view:1:558")
var aL=_mz(z,'scroll-view',['scrollY',-1,'scrollWithAnimation',-1,'bindscroll',16,'class',1,'data-comkey',2,'data-eventid',3,'scrollTop',4,'style',5],[],e,s,gg)
var tM=_v()
_(aL,tM)
cs.push("./pages/classify/classify.vue.wxml:view:1:786")
var eN=function(oP,bO,xQ,gg){
cs.push("./pages/classify/classify.vue.wxml:view:1:786")
var fS=_mz(z,'view',['class',26,'key',1],[],oP,bO,gg)
var cT=_v()
_(fS,cT)
cs.push("./pages/classify/classify.vue.wxml:view:1:917")
var hU=function(cW,oV,oX,gg){
cs.push("./pages/classify/classify.vue.wxml:view:1:917")
var aZ=_mz(z,'view',['bindtap',32,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'key',5],[],cW,oV,gg)
cs.push("./pages/classify/classify.vue.wxml:image:1:1158")
var t1=_mz(z,'image',['class',38,'src',1],[],cW,oV,gg)
cs.pop()
_(aZ,t1)
cs.push("./pages/classify/classify.vue.wxml:view:1:1217")
var e2=_n('view')
_rz(z,e2,'class',40,cW,oV,gg)
var b3=_oz(z,41,cW,oV,gg)
_(e2,b3)
cs.pop()
_(aZ,e2)
cs.pop()
_(oX,aZ)
return oX
}
cT.wxXCkey=2
_2z(z,30,hU,oP,bO,gg,cT,'item','i','i')
cs.pop()
cs.pop()
_(xQ,fS)
return xQ
}
tM.wxXCkey=2
_2z(z,24,eN,e,s,gg,tM,'foods','index','index')
cs.pop()
cs.pop()
_(oB,aL)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[9]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cI=e_[x[10]].i
_ai(cI,x[11],e_,x[10],1,1)
var oJ=_v()
_(r,oJ)
cs.push("./pages/classify/classify.wxml:template:2:6")
var lK=_oz(z,1,e,s,gg)
var aL=_gd(x[10],lK,e_,d_)
if(aL){
var tM=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[10],2,18)
cs.pop()
cI.pop()
return r
}
e_[x[10]]={f:m6,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
d_[x[12]]["220a2223"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[12]+':220a2223'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:1:221")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:template:1:267")
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[12],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[12],1,338)
cs.pop()
cs.push("./pages/index/index.vue.wxml:view:1:361")
var hG=_n('view')
_rz(z,hG,'class',4,e,s,gg)
var oH=_v()
_(hG,oH)
cs.push("./pages/index/index.vue.wxml:template:1:409")
var cI=_oz(z,6,e,s,gg)
var oJ=_gd(x[12],cI,e_,d_)
if(oJ){
var lK=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[12],1,480)
cs.pop()
cs.pop()
_(oB,hG)
cs.push("./pages/index/index.vue.wxml:view:1:510")
var aL=_n('view')
_rz(z,aL,'class',7,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:561")
var tM=_n('view')
_rz(z,tM,'class',8,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:604")
var eN=_n('view')
_rz(z,eN,'class',9,e,s,gg)
cs.pop()
_(tM,eN)
cs.push("./pages/index/index.vue.wxml:view:1:672")
var bO=_n('view')
_rz(z,bO,'class',10,e,s,gg)
var oP=_oz(z,11,e,s,gg)
_(bO,oP)
cs.pop()
_(tM,bO)
cs.pop()
_(aL,tM)
cs.pop()
_(oB,aL)
cs.push("./pages/index/index.vue.wxml:view:1:771")
var xQ=_n('view')
_rz(z,xQ,'class',12,e,s,gg)
cs.push("./pages/index/index.vue.wxml:swiper:1:822")
var oR=_mz(z,'swiper',['autoplay',13,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
var fS=_v()
_(oR,fS)
cs.push("./pages/index/index.vue.wxml:swiper-item:1:955")
var cT=function(oV,hU,cW,gg){
cs.push("./pages/index/index.vue.wxml:swiper-item:1:955")
var lY=_mz(z,'swiper-item',['bindtap',22,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],oV,hU,gg)
cs.push("./pages/index/index.vue.wxml:image:1:1190")
var aZ=_mz(z,'image',['class',27,'src',1],[],oV,hU,gg)
cs.pop()
_(lY,aZ)
cs.pop()
_(cW,lY)
return cW
}
fS.wxXCkey=2
_2z(z,20,cT,e,s,gg,fS,'item','index','index')
cs.pop()
cs.push("./pages/index/index.vue.wxml:swiper-item:1:1273")
var t1=_n('swiper-item')
_rz(z,t1,'class',29,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:1335")
var e2=_mz(z,'image',['class',30,'src',1],[],e,s,gg)
cs.pop()
_(t1,e2)
cs.pop()
_(oR,t1)
cs.pop()
_(xQ,oR)
cs.pop()
_(oB,xQ)
cs.push("./pages/index/index.vue.wxml:view:1:1458")
var b3=_n('view')
_rz(z,b3,'class',32,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:1506")
var o4=_n('view')
_rz(z,o4,'class',33,e,s,gg)
var x5=_oz(z,34,e,s,gg)
_(o4,x5)
cs.pop()
_(b3,o4)
cs.push("./pages/index/index.vue.wxml:view:1:1575")
var o6=_n('view')
_rz(z,o6,'class',35,e,s,gg)
var f7=_oz(z,36,e,s,gg)
_(o6,f7)
cs.pop()
_(b3,o6)
cs.pop()
_(oB,b3)
cs.push("./pages/index/index.vue.wxml:view:1:1906")
var c8=_n('view')
_rz(z,c8,'class',37,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:1949")
var h9=_mz(z,'view',['bindtap',38,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:2065")
var o0=_mz(z,'image',['class',42,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(h9,o0)
cs.pop()
_(c8,h9)
cs.push("./pages/index/index.vue.wxml:view:1:2185")
var cAB=_n('view')
_rz(z,cAB,'class',45,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:2227")
var oBB=_mz(z,'view',['bindtap',46,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:2342")
var lCB=_mz(z,'image',['class',50,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(oBB,lCB)
cs.pop()
_(cAB,oBB)
cs.push("./pages/index/index.vue.wxml:view:1:2460")
var aDB=_n('view')
_rz(z,aDB,'class',53,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:2503")
var tEB=_mz(z,'view',['bindtap',54,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:2626")
var eFB=_mz(z,'image',['class',58,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(tEB,eFB)
cs.pop()
_(aDB,tEB)
cs.push("./pages/index/index.vue.wxml:view:1:2743")
var bGB=_mz(z,'view',['bindtap',61,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:2867")
var oHB=_mz(z,'image',['class',65,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(bGB,oHB)
cs.pop()
_(aDB,bGB)
cs.pop()
_(cAB,aDB)
cs.pop()
_(c8,cAB)
cs.pop()
_(oB,c8)
cs.push("./pages/index/index.vue.wxml:view:1:3003")
var xIB=_n('view')
_rz(z,xIB,'class',68,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:3054")
var oJB=_n('view')
_rz(z,oJB,'class',69,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:3096")
var fKB=_n('view')
_rz(z,fKB,'class',70,e,s,gg)
var cLB=_oz(z,71,e,s,gg)
_(fKB,cLB)
cs.pop()
_(oJB,fKB)
cs.pop()
_(xIB,oJB)
var hMB=_v()
_(xIB,hMB)
cs.push("./pages/index/index.vue.wxml:template:1:3170")
var oNB=_oz(z,73,e,s,gg)
var cOB=_gd(x[12],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,72,e,s,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[12],1,3241)
cs.pop()
cs.pop()
_(oB,xIB)
cs.push("./pages/index/index.vue.wxml:view:1:3271")
var lQB=_n('view')
_rz(z,lQB,'class',74,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:3313")
var aRB=_n('view')
_rz(z,aRB,'class',75,e,s,gg)
var tSB=_oz(z,76,e,s,gg)
_(aRB,tSB)
cs.pop()
_(lQB,aRB)
cs.push("./pages/index/index.vue.wxml:text:1:3377")
var eTB=_n('text')
_rz(z,eTB,'class',77,e,s,gg)
var bUB=_oz(z,78,e,s,gg)
_(eTB,bUB)
cs.pop()
_(lQB,eTB)
cs.pop()
_(oB,lQB)
var oVB=_v()
_(oB,oVB)
cs.push("./pages/index/index.vue.wxml:template:1:3447")
var xWB=_oz(z,80,e,s,gg)
var oXB=_gd(x[12],xWB,e_,d_)
if(oXB){
var fYB=_1z(z,79,e,s,gg) || {}
var cur_globalf=gg.f
oVB.wxXCkey=3
oXB(fYB,fYB,oVB,gg)
gg.f=cur_globalf
}
else _w(xWB,x[12],1,3518)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var bO=e_[x[12]].i
_ai(bO,x[1],e_,x[12],1,1)
_ai(bO,x[2],e_,x[12],1,47)
_ai(bO,x[3],e_,x[12],1,96)
_ai(bO,x[4],e_,x[12],1,147)
bO.pop()
bO.pop()
bO.pop()
bO.pop()
return r
}
e_[x[12]]={f:m7,j:[],i:[],ti:[x[1],x[2],x[3],x[4]],ic:[]}
d_[x[13]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var xQ=e_[x[13]].i
_ai(xQ,x[14],e_,x[13],1,1)
var oR=_v()
_(r,oR)
cs.push("./pages/index/index.wxml:template:2:6")
var fS=_oz(z,1,e,s,gg)
var cT=_gd(x[13],fS,e_,d_)
if(cT){
var hU=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oR.wxXCkey=3
cT(hU,hU,oR,gg)
gg.f=cur_globalf
}
else _w(fS,x[13],2,18)
cs.pop()
xQ.pop()
return r
}
e_[x[13]]={f:m8,j:[],i:[],ti:[x[14]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

;var __pageFrameEndTime__ = Date.now();
if(!window.__uniAppViewReady__){
	window.__uniAppViewReady__ = true;
	document.dispatchEvent(new CustomEvent('uniAppViewReady'));
}

