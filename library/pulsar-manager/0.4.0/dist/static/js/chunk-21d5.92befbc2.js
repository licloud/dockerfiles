(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-21d5"],{"1tBZ":function(t,n,e){"use strict";e.d(n,"m",function(){return c}),e.d(n,"n",function(){return s}),e.d(n,"o",function(){return i}),e.d(n,"j",function(){return p}),e.d(n,"h",function(){return d}),e.d(n,"k",function(){return l}),e.d(n,"l",function(){return f}),e.d(n,"i",function(){return m}),e.d(n,"v",function(){return h}),e.d(n,"e",function(){return j}),e.d(n,"d",function(){return b}),e.d(n,"q",function(){return O}),e.d(n,"s",function(){return y}),e.d(n,"y",function(){return T}),e.d(n,"B",function(){return C}),e.d(n,"z",function(){return g}),e.d(n,"a",function(){return x}),e.d(n,"f",function(){return v}),e.d(n,"g",function(){return k}),e.d(n,"x",function(){return w}),e.d(n,"w",function(){return q}),e.d(n,"A",function(){return A}),e.d(n,"b",function(){return P}),e.d(n,"c",function(){return B}),e.d(n,"t",function(){return U}),e.d(n,"u",function(){return M}),e.d(n,"p",function(){return R}),e.d(n,"r",function(){return S});var r=e("t3Un"),o="/pulsar-manager/admin/v2",a="/admin/v2",u="/lookup/v2/topic";function c(t,n,e){return Object(r.a)({url:a+"/persistent/"+t+"/"+n,method:"get",params:{query:e}})}function s(t,n,e){return Object(r.a)({url:o+"/topics/"+t+"/"+n,method:"get",params:{query:e}})}function i(t,n,e){return Object(r.a)({url:o+"/topics/"+t+"/"+n+"/stats",method:"get",params:{query:e}})}function p(t,n){return Object(r.a)({url:a+"/persistent/"+t+"/"+n+"/partitioned",method:"get"})}function d(t,n){return Object(r.a)({url:a+"/non-persistent/"+t+"/"+n+"/partitioned",method:"get"})}function l(t,n){return Object(r.a)({url:a+"/"+t+"/"+n+"/stats",method:"get"})}function f(t,n){return Object(r.a)({url:a+"/"+t+"/"+n+"/internalStats",method:"get"})}function m(t,n,e){return Object(r.a)({url:a+"/"+t+"/"+n+"/partitioned-stats?perPartition="+e,method:"get"})}function h(t,n,e,o,u){var c="/"+t+"/"+n+"/"+e+"/"+o;return u>0?function(t,n,e,o,u){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/"+t+"/"+n+"/"+e+"/"+o+"/partitions",method:"put",data:u})}(t,n,e,o,u):Object(r.a)({headers:{"Content-Type":"application/json"},url:a+c,method:"put"})}function j(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e,method:"delete"})}function b(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/partitions",method:"delete"})}function O(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/permissions",method:"get"})}function y(t,n,e,o,u){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/permissions/"+o,method:"post",data:u})}function T(t,n,e,o){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/permissions/"+o,method:"delete"})}function C(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/unload",method:"put"})}function g(t,n,e,o,u){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/subscription/"+o+"/skip/"+u,method:"post"})}function x(t,n,e,o){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/subscription/"+o+"/skip_all",method:"post"})}function v(t,n,e,o,u){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/subscription/"+o+"/expireMessages/"+u,method:"post"})}function k(t,n,e,o){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/all_subscription/expireMessages/"+o,method:"post"})}function w(t,n,e,o,u){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/subscription/"+o+"/resetcursor/"+u,method:"post"})}function q(t,n,e,o,u){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/subscription/"+o+"/resetcursor",method:"post",data:u})}function A(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/terminate",method:"post"})}function P(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/compaction",method:"put"})}function B(t,n,e,o){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/compaction",method:"get",data:o})}function U(t,n,e,o){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/offload",method:"put",data:o})}function M(t,n,e,o){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/offload",method:"get",data:o})}function R(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:u+"/"+n+"/"+e+"/bundle",method:"get"})}function S(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:u+"/"+n+"/"+e,method:"get"})}},EHAl:function(t,n,e){"use strict";e.d(n,"b",function(){return u}),e.d(n,"c",function(){return c}),e.d(n,"d",function(){return s}),e.d(n,"e",function(){return i}),e.d(n,"a",function(){return p});var r=e("t3Un"),o="/pulsar-manager/admin/v2",a="/admin/v2";function u(){return Object(r.a)({url:o+"/tenants",method:"get"})}function c(t){return Object(r.a)({url:a+"/tenants/"+t,method:"get"})}function s(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/tenants/"+t,method:"put",data:n})}function i(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/tenants/"+t,method:"post",data:n})}function p(t){return Object(r.a)({url:a+"/tenants/"+t,method:"delete"})}},F2Sz:function(t,n,e){"use strict";e.d(n,"f",function(){return u}),e.d(n,"e",function(){return c}),e.d(n,"d",function(){return s}),e.d(n,"l",function(){return i}),e.d(n,"c",function(){return p}),e.d(n,"h",function(){return d}),e.d(n,"k",function(){return l}),e.d(n,"m",function(){return f}),e.d(n,"p",function(){return m}),e.d(n,"g",function(){return h}),e.d(n,"o",function(){return j}),e.d(n,"i",function(){return b}),e.d(n,"A",function(){return O}),e.d(n,"x",function(){return y}),e.d(n,"n",function(){return T}),e.d(n,"r",function(){return C}),e.d(n,"j",function(){return g}),e.d(n,"B",function(){return x}),e.d(n,"K",function(){return v}),e.d(n,"I",function(){return k}),e.d(n,"J",function(){return w}),e.d(n,"H",function(){return A}),e.d(n,"s",function(){return P}),e.d(n,"E",function(){return B}),e.d(n,"G",function(){return U}),e.d(n,"a",function(){return M}),e.d(n,"b",function(){return R}),e.d(n,"t",function(){return S}),e.d(n,"F",function(){return z}),e.d(n,"w",function(){return D}),e.d(n,"v",function(){return E}),e.d(n,"u",function(){return F}),e.d(n,"q",function(){return H}),e.d(n,"z",function(){return J}),e.d(n,"y",function(){return L}),e.d(n,"C",function(){return _}),e.d(n,"D",function(){return G});var r=e("t3Un"),o="/pulsar-manager/admin/v2",a="/admin/v2";function u(t,n){return Object(r.a)({url:o+"/namespaces/"+t,method:"get",params:{query:n}})}function c(t,n){return Object(r.a)({url:o+"/namespaces/"+t+"/"+n+"/stats",method:"get"})}function s(t){return Object(r.a)({url:a+"/namespaces/"+t,method:"get"})}function i(t,n,e){return Object(r.a)({url:a+"/namespaces/"+t+"/"+n,method:"put",data:e})}function p(t){return Object(r.a)({url:a+"/namespaces/"+t,method:"delete"})}function d(t){return Object(r.a)({url:a+"/namespaces/"+t+"/permissions",method:"get"})}function l(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/permissions/"+n,method:"post",data:e})}function f(t,n){return Object(r.a)({url:a+"/namespaces/"+t+"/permissions/"+n,method:"delete"})}function m(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/replication",method:"post",data:n})}function h(t,n){return Object(r.a)({url:a+"/namespaces/"+t+"/"+n+"/replication",method:"get"})}function j(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/backlogQuota",method:"post",data:n})}function b(t){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/persistence",method:"get"})}function O(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/persistence",method:"post",data:n})}function y(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/messageTTL",method:"post",data:n})}function T(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/antiAffinity",method:"post",data:n})}function C(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/deduplication",method:"post",data:n})}function g(t){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/retention",method:"get"})}function x(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/retention",method:"post",data:n})}function v(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/namespaces/"+n+"/unload",method:"put",data:e})}function k(t,n,e){return q("",t,n,e)}function w(t,n,e){return q(t,"",n,e)}function q(t,n,e,o){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t,"x-pulsar-broker":n},url:a+"/namespaces/"+e+"/"+o+"/unload",method:"put"})}function A(t,n,e,o){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/namespaces/"+n+"/"+e+"/split?unload="+o,method:"put"})}function P(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/dispatchRate",method:"post",data:n})}function B(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/subscribeRate",method:"post",data:n})}function U(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/subscriptionDispatchRate",method:"post",data:n})}function M(t,n){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/namespaces/"+n+"/clearBacklog",method:"post"})}function R(t,n,e){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/namespaces/"+n+"/"+e+"/clearBacklog",method:"post"})}function S(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/encryptionRequired",method:"post",data:n})}function z(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/subscriptionAuthMode",method:"post",data:n})}function D(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/maxProducersPerTopic",method:"post",data:n})}function E(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/maxConsumersPerTopic",method:"post",data:n})}function F(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/maxConsumersPerSubscription",method:"post",data:n})}function H(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/compactionThreshold",method:"put",data:n})}function J(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/offloadThreshold",method:"put",data:n})}function L(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/offloadDeletionLagMs",method:"put",data:n})}function _(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/schemaAutoUpdateCompatibilityStrategy",method:"put",data:n})}function G(t,n){return Object(r.a)({headers:{"Content-Type":"application/json"},url:a+"/namespaces/"+t+"/schemaValidationEnforced",method:"post",data:n})}},HPFg:function(t,n,e){"use strict";e.d(n,"b",function(){return u}),e.d(n,"d",function(){return c}),e.d(n,"a",function(){return s}),e.d(n,"c",function(){return i});var r=e("t3Un"),o="/admin/v2",a="/pulsar-manager/admin/v2";function u(t,n){return Object(r.a)({url:o+"/"+t+"/"+n+"/subscriptions",method:"get"})}function c(t,n,e,a){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:o+"/"+n+"/"+e+"/subscription/"+a,method:"put"})}function s(t,n,e,a){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:o+"/"+n+"/"+e+"/subscription/"+a,method:"delete"})}function i(t,n,e,o,u){return Object(r.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":t},url:a+"/"+n+"/"+e+"/subscription/"+o+"/"+u,method:"get"})}}}]);