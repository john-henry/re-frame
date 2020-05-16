// Compiled by ClojureScript 1.10.597
goog.provide("re_frame.core");
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_fx = re_frame.fx.reg_fx;
re_frame.core.clear_fx = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.reg_cofx;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var G__1167 = arguments.length;
switch (G__1167) {
case (2):
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_db.call(null,id,null,handler);
}));

(re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor.call(null,handler)], null));
}));

(re_frame.core.reg_event_db.cljs$lang$maxFixedArity = (3));

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var G__1170 = arguments.length;
switch (G__1170) {
case (2):
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_fx.call(null,id,null,handler);
}));

(re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,handler)], null));
}));

(re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = (3));

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var G__1173 = arguments.length;
switch (G__1173) {
case (2):
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.call(null,id,null,handler);
}));

(re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
}));

(re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = (3));

re_frame.core.clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_1179 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_1180 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)));
var seq__1175_1181 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_1180,original_subs_1179));
var chunk__1176_1182 = null;
var count__1177_1183 = (0);
var i__1178_1184 = (0);
while(true){
if((i__1178_1184 < count__1177_1183)){
var sub_1185 = cljs.core._nth.call(null,chunk__1176_1182,i__1178_1184);
re_frame.interop.dispose_BANG_.call(null,sub_1185);


var G__1186 = seq__1175_1181;
var G__1187 = chunk__1176_1182;
var G__1188 = count__1177_1183;
var G__1189 = (i__1178_1184 + (1));
seq__1175_1181 = G__1186;
chunk__1176_1182 = G__1187;
count__1177_1183 = G__1188;
i__1178_1184 = G__1189;
continue;
} else {
var temp__9646__auto___1190 = cljs.core.seq.call(null,seq__1175_1181);
if(temp__9646__auto___1190){
var seq__1175_1191__$1 = temp__9646__auto___1190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1175_1191__$1)){
var c__11729__auto___1192 = cljs.core.chunk_first.call(null,seq__1175_1191__$1);
var G__1193 = cljs.core.chunk_rest.call(null,seq__1175_1191__$1);
var G__1194 = c__11729__auto___1192;
var G__1195 = cljs.core.count.call(null,c__11729__auto___1192);
var G__1196 = (0);
seq__1175_1181 = G__1193;
chunk__1176_1182 = G__1194;
count__1177_1183 = G__1195;
i__1178_1184 = G__1196;
continue;
} else {
var sub_1197 = cljs.core.first.call(null,seq__1175_1191__$1);
re_frame.interop.dispose_BANG_.call(null,sub_1197);


var G__1198 = cljs.core.next.call(null,seq__1175_1191__$1);
var G__1199 = null;
var G__1200 = (0);
var G__1201 = (0);
seq__1175_1181 = G__1198;
chunk__1176_1182 = G__1199;
count__1177_1183 = G__1200;
i__1178_1184 = G__1201;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,re_frame.db.app_db,app_db);

return null;
});
});
/**
 * Remove all events queued for processing
 */
re_frame.core.purge_event_queue = (function re_frame$core$purge_event_queue(){
return re_frame.router.purge.call(null,re_frame.router.event_queue);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var G__1203 = arguments.length;
switch (G__1203) {
case (1):
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.call(null,f,f);
}));

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback.call(null,re_frame.router.event_queue,id,f);
}));

(re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = (2));

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback.call(null,re_frame.router.event_queue,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__12462__auto__ = [];
var len__12445__auto___1206 = arguments.length;
var i__12446__auto___1207 = (0);
while(true){
if((i__12446__auto___1207 < len__12445__auto___1206)){
args__12462__auto__.push((arguments[i__12446__auto___1207]));

var G__1208 = (i__12446__auto___1207 + (1));
i__12446__auto___1207 = G__1208;
continue;
} else {
}
break;
}

var argseq__12463__auto__ = ((((0) < args__12462__auto__.length))?(new cljs.core.IndexedSeq(args__12462__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__12463__auto__);
});

(re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),")");

return cljs.core.apply.call(null,re_frame.core.reg_event_db,args);
}));

(re_frame.core.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.core.register_handler.cljs$lang$applyTo = (function (seq1205){
var self__12421__auto__ = this;
return self__12421__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1205));
}));

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__12462__auto__ = [];
var len__12445__auto___1210 = arguments.length;
var i__12446__auto___1211 = (0);
while(true){
if((i__12446__auto___1211 < len__12445__auto___1210)){
args__12462__auto__.push((arguments[i__12446__auto___1211]));

var G__1212 = (i__12446__auto___1211 + (1));
i__12446__auto___1211 = G__1212;
continue;
} else {
}
break;
}

var argseq__12463__auto__ = ((((0) < args__12462__auto__.length))?(new cljs.core.IndexedSeq(args__12462__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__12463__auto__);
});

(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),")");

return cljs.core.apply.call(null,re_frame.core.reg_sub_raw,args);
}));

(re_frame.core.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.core.register_sub.cljs$lang$applyTo = (function (seq1209){
var self__12421__auto__ = this;
return self__12421__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1209));
}));


//# sourceURL=re_frame/core.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVfZnJhbWUvY29yZS5qcyIsInNvdXJjZXMiOlsiY29yZS5jbGpzIl0sImxpbmVDb3VudCI6MzQ2LCJtYXBwaW5ncyI6IjtBQXVDQSxBQUFLQSx5QkFBZUM7QUFDcEIsQUFBS0MsOEJBQWVDO0FBSXBCLEFBQUtDLHdCQUFlQztBQUNwQixBQUFLQywwQkFBZUM7QUFFcEIsQUFBS0MsMEJBQVUsQUFBQ0MsNEJBQVFDLGtDQUF5QkM7QUFDakQsQUFBS0MsK0NBQTBCQztBQUUvQjs7Ozs7NEJBQUEsNUJBQU1DLGdFQUlIQyxTQUFTQztBQUpaLEFBS0UsT0FBQ0MsOENBQTJCTixtQkFBVUksU0FBU0M7O0FBSWpELEFBQUtFLHVCQUFZQztBQUNqQixBQUFLQyx5QkFBWSxBQUFDWCw0QkFBUUMsa0NBQXlCVztBQUduRCxBQUFLQyx5QkFBWUM7QUFDakIsQUFBS0MsNEJBQVlDO0FBQ2pCLEFBQUtDLDJCQUFXLEFBQUNqQiw0QkFBUUMsa0NBQXlCaUI7QUFLbEQsQUFBQTs7Ozs7Ozs7Ozs7NkJBQUEscUNBQUFDLGxFQUFNRTtBQUFOLEFBQUEsSUFBQUQsVUFBQSxBQUFBO0FBQUEsQUFBQSxRQUFBQTtLQUFBO0FBQUEsT0FBQUMseURBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7S0FBQTtBQUFBLE9BQUFBLHlEQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7OztBQUFBLE1BQUEsS0FBQUMsTUFBQSxDQUFBLDhEQUFBLEFBQUE7Ozs7O0FBQUEsQ0FBQSwyREFBQSwzREFBTUQsc0VBVUZFLEdBQUdDO0FBVlAsQUFXSSwrQ0FBQSx4Q0FBQ0gscUNBQWFFLFFBQU9DOzs7QUFYekIsQ0FBQSwyREFBQSwzREFBTUgsc0VBWUZFLEdBQUdFLGFBQWFEO0FBWnBCLEFBYUcsNkNBQUEsdENBQUNFLG1DQUFnQkgsc0ZBQUlJLHdCQUFlQyxrQkFBU0gsYUFBYSxBQUFDSSwrREFBd0JMOzs7QUFidEYsQ0FBQSxxREFBQSxyREFBTUg7O0FBQU4sQUFn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QUFBLHJEQUFNRTs7QUFBTjtBQUFBLENBQUEsK0NBQUEsV0FBQUMsMURBQU1EO0FBQU4sQUFBQSxJQUFBSCxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUEsQUFBQWhDLHdCQUFBb0M7OztBQUFBIiwibmFtZXMiOlsicmUtZnJhbWUuY29yZS9kaXNwYXRjaCIsInJlLWZyYW1lLnJvdXRlci9kaXNwYXRjaCIsInJlLWZyYW1lLmNvcmUvZGlzcGF0Y2gtc3luYyIsInJlLWZyYW1lLnJvdXRlci9kaXNwYXRjaC1zeW5jIiwicmUtZnJhbWUuY29yZS9yZWctc3ViIiwicmUtZnJhbWUuc3Vicy9yZWctc3ViIiwicmUtZnJhbWUuY29yZS9zdWJzY3JpYmUiLCJyZS1mcmFtZS5zdWJzL3N1YnNjcmliZSIsInJlLWZyYW1lLmNvcmUvY2xlYXItc3ViIiwiY2xqcy5jb3JlL3BhcnRpYWwiLCJyZS1mcmFtZS5yZWdpc3RyYXIvY2xlYXItaGFuZGxlcnMiLCJyZS1mcmFtZS5zdWJzL2tpbmQiLCJyZS1mcmFtZS5jb3JlL2NsZWFyLXN1YnNjcmlwdGlvbi1jYWNoZSEiLCJyZS1mcmFtZS5zdWJzL2NsZWFyLXN1YnNjcmlwdGlvbi1jYWNoZSEiLCJyZS1mcmFtZS5jb3JlL3JlZy1zdWItcmF3IiwicXVlcnktaWQiLCJoYW5kbGVyLWZuIiwicmUtZnJhbWUucmVnaXN0cmFyL3JlZ2lzdGVyLWhhbmRsZXIiLCJyZS1mcmFtZS5jb3JlL3JlZy1meCIsInJlLWZyYW1lLmZ4L3JlZy1meCIsInJlLWZyYW1lLmNvcmUvY2xlYXItZngiLCJyZS1mcmFtZS5meC9raW5kIiwicmUtZnJhbWUuY29yZS9yZWctY29meCIsInJlLWZyYW1lLmNvZngvcmVnLWNvZngiLCJyZS1mcmFtZS5jb3JlL2luamVjdC1jb2Z4IiwicmUtZnJhbWUuY29meC9pbmplY3QtY29meCIsInJlLWZyYW1lLmNvcmUvY2xlYXItY29meCIsInJlLWZyYW1lLmNvZngva2luZCIsInZhcl9hcmdzIiwiR19fMTE2NyIsInJlLWZyYW1lLmNvcmUvcmVnLWV2ZW50LWRiIiwianMvRXJyb3IiLCJpZCIsImhhbmRsZXIiLCJpbnRlcmNlcHRvcnMiLCJyZS1mcmFtZS5ldmVudHMvcmVnaXN0ZXIiLCJyZS1mcmFtZS5jb2Z4L2luamVjdC1kYiIsInJlLWZyYW1lLmZ4L2RvLWZ4IiwicmUtZnJhbWUuc3RkLWludGVyY2VwdG9ycy9kYi1oYW5kbGVyLT5pbnRlcmNlcHRvciIsIkdfXzExNzAiLCJyZS1mcmFtZS5jb3JlL3JlZy1ldmVudC1meCIsInJlLWZyYW1lLnN0ZC1pbnRlcmNlcHRvcnMvZngtaGFuZGxlci0+aW50ZXJjZXB0b3IiLCJHX18xMTczIiwicmUtZnJhbWUuY29yZS9yZWctZXZlbnQtY3R4IiwicmUtZnJhbWUuc3RkLWludGVyY2VwdG9ycy9jdHgtaGFuZGxlci0+aW50ZXJjZXB0b3IiLCJyZS1mcmFtZS5jb3JlL2NsZWFyLWV2ZW50IiwicmUtZnJhbWUuZXZlbnRzL2tpbmQiLCJyZS1mcmFtZS5jb3JlL2RlYnVnIiwicmUtZnJhbWUuc3RkLWludGVyY2VwdG9ycy9kZWJ1ZyIsInJlLWZyYW1lLmNvcmUvcGF0aCIsInJlLWZyYW1lLnN0ZC1pbnRlcmNlcHRvcnMvcGF0aCIsInJlLWZyYW1lLmNvcmUvZW5yaWNoIiwicmUtZnJhbWUuc3RkLWludGVyY2VwdG9ycy9lbnJpY2giLCJyZS1mcmFtZS5jb3JlL3RyaW0tdiIsInJlLWZyYW1lLnN0ZC1pbnRlcmNlcHRvcnMvdHJpbS12IiwicmUtZnJhbWUuY29yZS9hZnRlciIsInJlLWZyYW1lLnN0ZC1pbnRlcmNlcHRvcnMvYWZ0ZXIiLCJyZS1mcmFtZS5jb3JlL29uLWNoYW5nZXMiLCJyZS1mcmFtZS5zdGQtaW50ZXJjZXB0b3JzL29uLWNoYW5nZXMiLCJyZS1mcmFtZS5jb3JlLy0+aW50ZXJjZXB0b3IiLCJyZS1mcmFtZS5pbnRlcmNlcHRvci8tPmludGVyY2VwdG9yIiwicmUtZnJhbWUuY29yZS9nZXQtY29lZmZlY3QiLCJyZS1mcmFtZS5pbnRlcmNlcHRvci9nZXQtY29lZmZlY3QiLCJyZS1mcmFtZS5jb3JlL2Fzc29jLWNvZWZmZWN0IiwicmUtZnJhbWUuaW50ZXJjZXB0b3IvYXNzb2MtY29lZmZlY3QiLCJyZS1mcmFtZS5jb3JlL2dldC1lZmZlY3QiLCJyZS1mcmFtZS5pbnRlcmNlcHRvci9nZXQtZWZmZWN0IiwicmUtZnJhbWUuY29yZS9hc3NvYy1lZmZlY3QiLCJyZS1mcmFtZS5pbnRlcmNlcHRvci9hc3NvYy1lZmZlY3QiLCJyZS1mcmFtZS5jb3JlL2VucXVldWUiLCJyZS1mcmFtZS5pbnRlcmNlcHRvci9lbnF1ZXVlIiwicmUtZnJhbWUuY29yZS9zZXQtbG9nZ2VycyEiLCJyZS1mcmFtZS5sb2dnZXJzL3NldC1sb2dnZXJzISIsInJlLWZyYW1lLmNvcmUvY29uc29sZSIsInJlLWZyYW1lLmxvZ2dlcnMvY29uc29sZSIsInJlLWZyYW1lLmNvcmUvbWFrZS1yZXN0b3JlLWZuIiwiY2xqcy5jb3JlL2RlcmVmIiwiaGFuZGxlcnMiLCJyZS1mcmFtZS5yZWdpc3RyYXIva2luZC0+aWQtPmhhbmRsZXIiLCJhcHAtZGIiLCJyZS1mcmFtZS5kYi9hcHAtZGIiLCJzdWJzLWNhY2hlIiwicmUtZnJhbWUuc3Vicy9xdWVyeS0+cmVhY3Rpb24iLCJvcmlnaW5hbC1zdWJzIiwiY2xqcy5jb3JlL3NldCIsImNsanMuY29yZS92YWxzIiwiY3VycmVudC1zdWJzIiwic2VxX18xMTc1IiwiY2xqcy5jb3JlL3NlcSIsImNodW5rX18xMTc2IiwiY291bnRfXzExNzciLCJpX18xMTc4IiwiY2xqcy5jb3JlLy1udGgiLCJ0ZW1wX185NjQ2X19hdXRvX18iLCJjbGpzLmNvcmUvY2h1bmtlZC1zZXE/IiwiY19fMTE3MjlfX2F1dG9fXyIsImNsanMuY29yZS9jaHVuay1maXJzdCIsImNsanMuY29yZS9jaHVuay1yZXN0IiwiY2xqcy5jb3JlL2NvdW50IiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25leHQiLCJzdWIiLCJjbG9qdXJlLnNldC9kaWZmZXJlbmNlIiwicmUtZnJhbWUuaW50ZXJvcC9kaXNwb3NlISIsImNsanMuY29yZS9yZXNldCEiLCJyZS1mcmFtZS5jb3JlL3B1cmdlLWV2ZW50LXF1ZXVlIiwicmUtZnJhbWUucm91dGVyL3B1cmdlIiwicmUtZnJhbWUucm91dGVyL2V2ZW50LXF1ZXVlIiwiR19fMTIwMyIsInJlLWZyYW1lLmNvcmUvYWRkLXBvc3QtZXZlbnQtY2FsbGJhY2siLCJmIiwicmUtZnJhbWUucm91dGVyL2FkZC1wb3N0LWV2ZW50LWNhbGxiYWNrIiwicmUtZnJhbWUuY29yZS9yZW1vdmUtcG9zdC1ldmVudC1jYWxsYmFjayIsInJlLWZyYW1lLnJvdXRlci9yZW1vdmUtcG9zdC1ldmVudC1jYWxsYmFjayIsImFyZ3NfXzEyNDYyX19hdXRvX18iLCJsZW5fXzEyNDQ1X19hdXRvX18iLCJpX18xMjQ0Nl9fYXV0b19fIiwiYXJnc2VxX18xMjQ2M19fYXV0b19fIiwicmUtZnJhbWUuY29yZS9yZWdpc3Rlci1oYW5kbGVyIiwic2VxMTIwNSIsInNlbGZfXzEyNDIxX19hdXRvX18iLCJhcmdzIiwiY2xqcy5jb3JlL2FwcGx5IiwicmUtZnJhbWUuY29yZS9yZWdpc3Rlci1zdWIiLCJzZXExMjA5IiwiY2xqcy5jb3JlL0luZGV4ZWRTZXEiXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIHJlLWZyYW1lLmNvcmVcbiAgKDpyZXF1aXJlXG4gICAgW3JlLWZyYW1lLmV2ZW50cyAgICAgICAgICAgOmFzIGV2ZW50c11cbiAgICBbcmUtZnJhbWUuc3VicyAgICAgICAgICAgICA6YXMgc3Vic11cbiAgICBbcmUtZnJhbWUuaW50ZXJvcCAgICAgICAgICA6YXMgaW50ZXJvcF1cbiAgICBbcmUtZnJhbWUuZGIgICAgICAgICAgICAgICA6YXMgZGJdXG4gICAgW3JlLWZyYW1lLmZ4ICAgICAgICAgICAgICAgOmFzIGZ4XVxuICAgIFtyZS1mcmFtZS5jb2Z4ICAgICAgICAgICAgIDphcyBjb2Z4XVxuICAgIFtyZS1mcmFtZS5yb3V0ZXIgICAgICAgICAgIDphcyByb3V0ZXJdXG4gICAgW3JlLWZyYW1lLmxvZ2dlcnMgICAgICAgICAgOmFzIGxvZ2dlcnNdXG4gICAgW3JlLWZyYW1lLnJlZ2lzdHJhciAgICAgICAgOmFzIHJlZ2lzdHJhcl1cbiAgICBbcmUtZnJhbWUuaW50ZXJjZXB0b3IgICAgICA6YXMgaW50ZXJjZXB0b3JdXG4gICAgW3JlLWZyYW1lLnN0ZC1pbnRlcmNlcHRvcnMgOmFzIHN0ZC1pbnRlcmNlcHRvcnMgOnJlZmVyIFtkYi1oYW5kbGVyLT5pbnRlcmNlcHRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4LWhhbmRsZXItPmludGVyY2VwdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LWhhbmRsZXItPmludGVyY2VwdG9yXV1cbiAgICBbY2xvanVyZS5zZXQgICAgICAgICAgICAgICA6YXMgc2V0XSkpXG5cblxuOzsgLS0gQVBJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOztcbjs7IFRoaXMgbmFtZXNwYWNlIHJlcHJlc2VudHMgdGhlIHJlLWZyYW1lIEFQSVxuOztcbjs7IEJlbG93LCB5b3UnbGwgc2VlIHdlJ3ZlIHVzZWQgdGhpcyB0ZWNobmlxdWU6XG47OyAgIChkZWYgIGFwaS1uYW1lLWZvci1mbiAgICBkZWVwZXIubmFtZXNwYWNlL3doZXJlLXRoZS1kZWZuLWlzKVxuOztcbjs7IFNvLCB3ZSBwcm9tb3RlIGEgYGRlZm5gIGluIGEgZGVlcGVyIG5hbWVzcGFjZSBcInVwXCIgdG8gdGhlIEFQSVxuOzsgdmlhIGEgYGRlZmAgaW4gdGhpcyBuYW1lc3BhY2UuXG47O1xuOzsgVHVybnMgb3V0LCB0aGlzIGFwcHJvYWNoIG1ha2VzIGl0IGhhcmQ6XG47OyAgIC0gdG8gYXV0by1nZW5lcmF0ZSBBUEkgZG9jc1xuOzsgICAtIGZvciBJREVzIHRvIHByb3ZpZGUgY29kZSBjb21wbGV0aW9uIG9uIGZ1bmN0aW9ucyBpbiB0aGUgQVBJXG47O1xuOzsgV2hpY2ggaXMgYW5ub3lpbmcuIEJ1dCB0aGVyZSBhcmUgcHJvcyBhbmQgY29ucyBhbmQgd2UgaGF2ZW4ndFxuOzsgeWV0IHJldmlzaXRlZCB0aGUgZGVjaXNpb24uICBUbyBjb21wZW5zYXRlLCB3ZSd2ZSBhZGRlZCBtb3JlIG51ZGl0eVxuOzsgdG8gdGhlIGRvY3MuXG47O1xuXG5cbjs7IC0tIGRpc3BhdGNoIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbihkZWYgZGlzcGF0Y2ggICAgICAgcm91dGVyL2Rpc3BhdGNoKVxuKGRlZiBkaXNwYXRjaC1zeW5jICByb3V0ZXIvZGlzcGF0Y2gtc3luYylcblxuXG47OyAtLSBzdWJzY3JpcHRpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4oZGVmIHJlZy1zdWIgICAgICAgIHN1YnMvcmVnLXN1YilcbihkZWYgc3Vic2NyaWJlICAgICAgc3Vicy9zdWJzY3JpYmUpXG5cbihkZWYgY2xlYXItc3ViIChwYXJ0aWFsIHJlZ2lzdHJhci9jbGVhci1oYW5kbGVycyBzdWJzL2tpbmQpKSAgOzsgdGhpbmsgdW5yZWctc3ViXG4oZGVmIGNsZWFyLXN1YnNjcmlwdGlvbi1jYWNoZSEgc3Vicy9jbGVhci1zdWJzY3JpcHRpb24tY2FjaGUhKVxuXG4oZGVmbiByZWctc3ViLXJhd1xuICBcIlRoaXMgaXMgYSBsb3cgbGV2ZWwsIGFkdmFuY2VkIGZ1bmN0aW9uLiAgWW91IHNob3VsZCBwcm9iYWJseSBiZVxuICB1c2luZyByZWctc3ViIGluc3RlYWQuXG4gIERvY3MgaW4gaHR0cHM6Ly9naXRodWIuY29tL2RheTgvcmUtZnJhbWUvYmxvYi9tYXN0ZXIvZG9jcy9TdWJzY3JpcHRpb25GbG93Lm1kXCJcbiAgW3F1ZXJ5LWlkIGhhbmRsZXItZm5dXG4gIChyZWdpc3RyYXIvcmVnaXN0ZXItaGFuZGxlciBzdWJzL2tpbmQgcXVlcnktaWQgaGFuZGxlci1mbikpXG5cblxuOzsgLS0gZWZmZWN0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKGRlZiByZWctZnggICAgICBmeC9yZWctZngpXG4oZGVmIGNsZWFyLWZ4ICAgIChwYXJ0aWFsIHJlZ2lzdHJhci9jbGVhci1oYW5kbGVycyBmeC9raW5kKSkgIDs7IHRoaW5rIHVucmVnLWZ4XG5cbjs7IC0tIGNvZWZmZWN0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbihkZWYgcmVnLWNvZnggICAgY29meC9yZWctY29meClcbihkZWYgaW5qZWN0LWNvZnggY29meC9pbmplY3QtY29meClcbihkZWYgY2xlYXItY29meCAocGFydGlhbCByZWdpc3RyYXIvY2xlYXItaGFuZGxlcnMgY29meC9raW5kKSkgOzsgdGhpbmsgdW5yZWctY29meFxuXG5cbjs7IC0tIEV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuKGRlZm4gcmVnLWV2ZW50LWRiXG4gIFwiUmVnaXN0ZXIgdGhlIGdpdmVuIGV2ZW50IGBoYW5kbGVyYCAoZnVuY3Rpb24pIGZvciB0aGUgZ2l2ZW4gYGlkYC4gT3B0aW9uYWxseSwgcHJvdmlkZVxuICBhbiBgaW50ZXJjZXB0b3JzYCBjaGFpbi5cbiAgYGlkYCBpcyB0eXBpY2FsbHkgYSBuYW1lc3BhY2VkIGtleXdvcmQgIChidXQgY2FuIGJlIGFueXRoaW5nKVxuICBgaGFuZGxlcmAgaXMgYSBmdW5jdGlvbjogKGRiIGV2ZW50KSAtPiBkYlxuICBgaW50ZXJjZXB0b3JzYCBpcyBhIGNvbGxlY3Rpb24gb2YgaW50ZXJjZXB0b3JzLiBXaWxsIGJlIGZsYXR0ZW5lZCBhbmQgbmlscyByZW1vdmVkLlxuICBgaGFuZGxlcmAgaXMgd3JhcHBlZCBpbiBpdHMgb3duIGludGVyY2VwdG9yIGFuZCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBpbnRlcmNlcHRvclxuICAgY2hhaW4sIHNvIHRoYXQsIGluIHRoZSBlbmQsIG9ubHkgYSBjaGFpbiBpcyByZWdpc3RlcmVkLlxuICAgU3BlY2lhbCBlZmZlY3RzIGFuZCBjb2VmZmVjdHMgaW50ZXJjZXB0b3JzIGFyZSBhZGRlZCB0byB0aGUgZnJvbnQgb2YgdGhpc1xuICAgY2hhaW4uXCJcbiAgKFtpZCBoYW5kbGVyXVxuICAgIChyZWctZXZlbnQtZGIgaWQgbmlsIGhhbmRsZXIpKVxuICAoW2lkIGludGVyY2VwdG9ycyBoYW5kbGVyXVxuICAgKGV2ZW50cy9yZWdpc3RlciBpZCBbY29meC9pbmplY3QtZGIgZngvZG8tZnggaW50ZXJjZXB0b3JzIChkYi1oYW5kbGVyLT5pbnRlcmNlcHRvciBoYW5kbGVyKV0pKSlcblxuXG4oZGVmbiByZWctZXZlbnQtZnhcbiAgXCJSZWdpc3RlciB0aGUgZ2l2ZW4gZXZlbnQgYGhhbmRsZXJgIChmdW5jdGlvbikgZm9yIHRoZSBnaXZlbiBgaWRgLiBPcHRpb25hbGx5LCBwcm92aWRlXG4gIGFuIGBpbnRlcmNlcHRvcnNgIGNoYWluLlxuICBgaWRgIGlzIHR5cGljYWxseSBhIG5hbWVzcGFjZWQga2V5d29yZCAgKGJ1dCBjYW4gYmUgYW55dGhpbmcpXG4gIGBoYW5kbGVyYCBpcyBhIGZ1bmN0aW9uOiAoY29lZmZlY3RzLW1hcCBldmVudC12ZWN0b3IpIC0+IGVmZmVjdHMtbWFwXG4gIGBpbnRlcmNlcHRvcnNgIGlzIGEgY29sbGVjdGlvbiBvZiBpbnRlcmNlcHRvcnMuIFdpbGwgYmUgZmxhdHRlbmVkIGFuZCBuaWxzIHJlbW92ZWQuXG4gIGBoYW5kbGVyYCBpcyB3cmFwcGVkIGluIGl0cyBvd24gaW50ZXJjZXB0b3IgYW5kIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGludGVyY2VwdG9yXG4gICBjaGFpbiwgc28gdGhhdCwgaW4gdGhlIGVuZCwgb25seSBhIGNoYWluIGlzIHJlZ2lzdGVyZWQuXG4gICBTcGVjaWFsIGVmZmVjdHMgYW5kIGNvZWZmZWN0cyBpbnRlcmNlcHRvcnMgYXJlIGFkZGVkIHRvIHRoZSBmcm9udCBvZiB0aGVcbiAgIGludGVyY2VwdG9yIGNoYWluLiAgVGhlc2UgaW50ZXJjZXB0b3JzIGluamVjdCB0aGUgdmFsdWUgb2YgYXBwLWRiIGludG8gY29lZmZlY3RzLFxuICAgYW5kLCBsYXRlciwgYWN0aW9uIGVmZmVjdHMuXCJcbiAgKFtpZCBoYW5kbGVyXVxuICAgKHJlZy1ldmVudC1meCBpZCBuaWwgaGFuZGxlcikpXG4gIChbaWQgaW50ZXJjZXB0b3JzIGhhbmRsZXJdXG4gICAoZXZlbnRzL3JlZ2lzdGVyIGlkIFtjb2Z4L2luamVjdC1kYiBmeC9kby1meCBpbnRlcmNlcHRvcnMgKGZ4LWhhbmRsZXItPmludGVyY2VwdG9yIGhhbmRsZXIpXSkpKVxuXG5cbihkZWZuIHJlZy1ldmVudC1jdHhcbiAgXCJSZWdpc3RlciB0aGUgZ2l2ZW4gZXZlbnQgYGhhbmRsZXJgIChmdW5jdGlvbikgZm9yIHRoZSBnaXZlbiBgaWRgLiBPcHRpb25hbGx5LCBwcm92aWRlXG4gIGFuIGBpbnRlcmNlcHRvcnNgIGNoYWluLlxuICBgaWRgIGlzIHR5cGljYWxseSBhIG5hbWVzcGFjZWQga2V5d29yZCAgKGJ1dCBjYW4gYmUgYW55dGhpbmcpXG4gIGBoYW5kbGVyYCBpcyBhIGZ1bmN0aW9uOiAoY29udGV4dC1tYXAgZXZlbnQtdmVjdG9yKSAtPiBjb250ZXh0LW1hcFxuXG4gIFRoaXMgZm9ybSBvZiByZWdpc3RyYXRpb24gaXMgYWxtb3N0IG5ldmVyIHVzZWQuIFwiXG4gIChbaWQgaGFuZGxlcl1cbiAgIChyZWctZXZlbnQtY3R4IGlkIG5pbCBoYW5kbGVyKSlcbiAgKFtpZCBpbnRlcmNlcHRvcnMgaGFuZGxlcl1cbiAgIChldmVudHMvcmVnaXN0ZXIgaWQgW2NvZngvaW5qZWN0LWRiIGZ4L2RvLWZ4IGludGVyY2VwdG9ycyAoY3R4LWhhbmRsZXItPmludGVyY2VwdG9yIGhhbmRsZXIpXSkpKVxuXG4oZGVmIGNsZWFyLWV2ZW50IChwYXJ0aWFsIHJlZ2lzdHJhci9jbGVhci1oYW5kbGVycyBldmVudHMva2luZCkpIDs7IHRoaW5rIHVucmVnLWV2ZW50LSpcblxuOzsgLS0gaW50ZXJjZXB0b3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG47OyBTdGFuZGFyZCBpbnRlcmNlcHRvcnMuXG47OyBEZXRhaWxlZCBkb2NzIG9uIGVhY2ggaW4gc3RkLWludGVyY2VwdG9ycy5jbGpzXG4oZGVmIGRlYnVnICAgICAgIHN0ZC1pbnRlcmNlcHRvcnMvZGVidWcpXG4oZGVmIHBhdGggICAgICAgIHN0ZC1pbnRlcmNlcHRvcnMvcGF0aClcbihkZWYgZW5yaWNoICAgICAgc3RkLWludGVyY2VwdG9ycy9lbnJpY2gpXG4oZGVmIHRyaW0tdiAgICAgIHN0ZC1pbnRlcmNlcHRvcnMvdHJpbS12KVxuKGRlZiBhZnRlciAgICAgICBzdGQtaW50ZXJjZXB0b3JzL2FmdGVyKVxuKGRlZiBvbi1jaGFuZ2VzICBzdGQtaW50ZXJjZXB0b3JzL29uLWNoYW5nZXMpXG5cblxuOzsgVXRpbGl0eSBmdW5jdGlvbnMgZm9yIGNyZWF0aW5nIHlvdXIgb3duIGludGVyY2VwdG9yc1xuOztcbjs7ICAoZGVmIG15LWludGVyY2VwdG9yXG47OyAgICAgKC0+aW50ZXJjZXB0b3IgICAgICAgICAgICAgICAgOzsgdXNlZCB0byBjcmVhdGUgYW4gaW50ZXJjZXB0b3Jcbjs7ICAgICAgIDppZCAgICAgOm15LWludGVyY2VwdG9yICAgICA7OyBhbiBpZCAtIGRlY29yYXRpdmUgb25seVxuOzsgICAgICAgOmJlZm9yZSAoZm4gW2NvbnRleHRdICAgICAgICAgICAgICAgICAgICAgICAgIDs7IHlvdSBub3JtYWxseSB3YW50IHRvIGNoYW5nZSA6Y29lZmZlY3RzXG47OyAgICAgICAgICAgICAgICAgIC4uLiB1c2UgZ2V0LWNvZWZmZWN0ICBhbmQgYXNzb2MtY29lZmZlY3Rcbjs7ICAgICAgICAgICAgICAgICAgICAgICApXG47OyAgICAgICA6YWZ0ZXIgIChmbiBbY29udGV4dF0gICAgICAgICAgICAgICAgICAgICAgICAgOzsgeW91IG5vcm1hbGx5IHdhbnQgdG8gY2hhbmdlIDplZmZlY3RzXG47OyAgICAgICAgICAgICAgICAgKGxldCBbZGIgKGdldC1lZmZlY3QgY29udGV4dCA6ZGIpXSAgOzsgKGdldC1pbiBjb250ZXh0IFs6ZWZmZWN0cyA6ZGJdKVxuOzsgICAgICAgICAgICAgICAgICAgKGFzc29jLWVmZmVjdCBjb250ZXh0IDpodHRwLWFqYXggey4uLn1dKSkpKSlcbjs7XG4oZGVmIC0+aW50ZXJjZXB0b3IgICBpbnRlcmNlcHRvci8tPmludGVyY2VwdG9yKVxuKGRlZiBnZXQtY29lZmZlY3QgICAgaW50ZXJjZXB0b3IvZ2V0LWNvZWZmZWN0KVxuKGRlZiBhc3NvYy1jb2VmZmVjdCAgaW50ZXJjZXB0b3IvYXNzb2MtY29lZmZlY3QpXG4oZGVmIGdldC1lZmZlY3QgICAgICBpbnRlcmNlcHRvci9nZXQtZWZmZWN0KVxuKGRlZiBhc3NvYy1lZmZlY3QgICAgaW50ZXJjZXB0b3IvYXNzb2MtZWZmZWN0KVxuKGRlZiBlbnF1ZXVlICAgICAgICAgaW50ZXJjZXB0b3IvZW5xdWV1ZSlcblxuXG47OyAtLSAgbG9nZ2luZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyBJbnRlcm5hbGx5LCByZS1mcmFtZSB1c2VzIHRoZSBsb2dnaW5nIGZ1bmN0aW9uczogd2FybiwgbG9nLCBlcnJvciwgZ3JvdXAgYW5kIGdyb3VwRW5kXG47OyBCeSBkZWZhdWx0LCB0aGVzZSBmdW5jdGlvbnMgbWFwIGRpcmVjdGx5IHRvIHRoZSBqcy9jb25zb2xlIGltcGxlbWVudGF0aW9ucyxcbjs7IGJ1dCB5b3UgY2FuIG92ZXJyaWRlIHdpdGggeW91ciBvd24gZm5zIChzZXQgb3Igc3Vic2V0KS5cbjs7IEV4YW1wbGUgVXNhZ2U6XG47OyAgIChkZWZuIG15LWZuIFsmIGFyZ3NdICAocG9zdC1pdC1zb21ld2hlcmUgKGFwcGx5IHN0ciBhcmdzKSkpICA7OyBoZXJlIGlzIG15IGFsdGVybmF0aXZlXG47OyAgIChyZS1mcmFtZS5jb3JlL3NldC1sb2dnZXJzISAgezp3YXJuIG15LWZuIDpsb2cgbXktZm59KSAgICAgICA7OyBvdmVycmlkZSB0aGUgZGVmYXVsdHMgd2l0aCBtaW5lXG4oZGVmIHNldC1sb2dnZXJzISBsb2dnZXJzL3NldC1sb2dnZXJzISlcblxuOzsgSWYgeW91IGFyZSB3cml0aW5nIGFuIGV4dGVuc2lvbiB0byByZS1mcmFtZSwgbGlrZSBwZXJoYXBzXG47OyBhbiBlZmZlY3RzIGhhbmRsZXIsIHlvdSBtYXkgd2FudCB0byB1c2UgcmUtZnJhbWUgbG9nZ2luZy5cbjs7XG47OyB1c2FnZTogKGNvbnNvbGUgOmVycm9yIFwiT2gsIGRlYXIgR29kLCBpdCBoYXBwZW5lZDogXCIgYS12YXIgXCIgYW5kIFwiIGFub3RoZXIpXG47OyAgICAgICAgKGNvbnNvbGUgOndhcm4gXCJQb3NzaWJsZSBicmVhY2ggb2YgY29udGFpbm1lbnQgd2FsbCBhdDogXCIgZHQpXG4oZGVmIGNvbnNvbGUgbG9nZ2Vycy9jb25zb2xlKVxuXG5cbjs7IC0tIHVuaXQgdGVzdGluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuKGRlZm4gbWFrZS1yZXN0b3JlLWZuXG4gIFwiQ2hlY2twb2ludHMgdGhlIHN0YXRlIG9mIHJlLWZyYW1lIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW5cbiAgbGF0ZXIgY2FsbGVkLCB3aWxsIHJlc3RvcmUgcmUtZnJhbWUgdG8gdGhhdCBjaGVja3BvaW50ZWQgc3RhdGUuXG5cbiAgQ2hlY2twb2ludCBpbmNsdWRlcyBhcHAtZGIsIGFsbCByZWdpc3RlcmVkIGhhbmRsZXJzIGFuZCBhbGwgc3Vic2NyaXB0aW9ucy5cbiAgXCJcbiAgW11cbiAgKGxldCBbaGFuZGxlcnMgQHJlZ2lzdHJhci9raW5kLT5pZC0+aGFuZGxlclxuICAgICAgICBhcHAtZGIgICBAZGIvYXBwLWRiXG5cdFx0XHRcdHN1YnMtY2FjaGUgQHN1YnMvcXVlcnktPnJlYWN0aW9uXVxuICAgIChmbiBbXVxuXHRcdFx0OzsgY2FsbCBgZGlzcG9zZSFgIG9uIGFsbCBjdXJyZW50IHN1YnNjcmlwdGlvbnMgd2hpY2hcblx0XHRcdDs7IGRpZG4ndCBvcmlnaW5hbGx5IGV4aXN0LlxuICAgICAgKGxldCBbb3JpZ2luYWwtc3VicyAoc2V0ICh2YWxzIHN1YnMtY2FjaGUpKVxuICAgICAgICAgICAgY3VycmVudC1zdWJzICAoc2V0ICh2YWxzIEBzdWJzL3F1ZXJ5LT5yZWFjdGlvbikpXVxuICAgICAgICAoZG9zZXEgW3N1YiAoc2V0L2RpZmZlcmVuY2UgY3VycmVudC1zdWJzIG9yaWdpbmFsLXN1YnMpXVxuICAgICAgICAgIChpbnRlcm9wL2Rpc3Bvc2UhIHN1YikpKVxuXG4gICAgICA7OyBSZXNldCB0aGUgYXRvbXNcbiAgICAgIDs7IFdlIGRvbid0IG5lZWQgdG8gcmVzZXQgc3Vicy9xdWVyeS0+cmVhY3Rpb24sIGFzXG4gICAgICA7OyBkaXNwb3Npbmcgb2YgdGhlIHN1YnMgcmVtb3ZlcyB0aGVtIGZyb20gdGhlIGNhY2hlIGFueXdheVxuICAgICAgKHJlc2V0ISByZWdpc3RyYXIva2luZC0+aWQtPmhhbmRsZXIgaGFuZGxlcnMpXG4gICAgICAocmVzZXQhIGRiL2FwcC1kYiBhcHAtZGIpXG4gICAgICBuaWwpKSlcblxuKGRlZm4gcHVyZ2UtZXZlbnQtcXVldWVcbiAgXCJSZW1vdmUgYWxsIGV2ZW50cyBxdWV1ZWQgZm9yIHByb2Nlc3NpbmdcIlxuICBbXVxuICAocm91dGVyL3B1cmdlIHJlLWZyYW1lLnJvdXRlci9ldmVudC1xdWV1ZSkpXG5cbjs7IC0tIEV2ZW50IFByb2Nlc3NpbmcgQ2FsbGJhY2tzICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuKGRlZm4gYWRkLXBvc3QtZXZlbnQtY2FsbGJhY2tcbiAgXCJSZWdpc3RlcnMgYSBmdW5jdGlvbiBgZmAgdG8gYmUgY2FsbGVkIGFmdGVyIGVhY2ggZXZlbnQgaXMgcHJvY2Vzc2VkXG4gICBgZmAgd2lsbCBiZSBjYWxsZWQgd2l0aCB0d28gYXJndW1lbnRzOlxuICAgIC0gYGV2ZW50YDogYSB2ZWN0b3IuIFRoZSBldmVudCBqdXN0IHByb2Nlc3NlZC5cbiAgICAtIGBxdWV1ZWA6IGEgUGVyc2lzdGVudFF1ZXVlLCBwb3NzaWJseSBlbXB0eSwgb2YgZXZlbnRzIHlldCB0byBiZSBwcm9jZXNzZWQuXG5cbiAgIFRoaXMgaXMgdXNlZnVsIGluIGFkdmFuY2VkIGNhc2VzIGxpa2U6XG4gICAgIC0geW91IGFyZSBpbXBsZW1lbnRpbmcgYSBjb21wbGV4IGJvb3RzdHJhcCBwaXBlbGluZVxuICAgICAtIHlvdSB3YW50IHRvIGNyZWF0ZSB5b3VyIG93biBoYW5kbGluZyBpbmZyYXN0cnVjdHVyZSwgd2l0aCBwZXJoYXBzIG11bHRpcGxlXG4gICAgICAgaGFuZGxlcnMgZm9yIHRoZSBvbmUgZXZlbnQsIGV0Yy4gIEhvb2sgaW4gaGVyZS5cbiAgICAgLSBsaWJyYXJpZXMgcHJvdmlkaW5nICdpc29tb3JwaGljIGphdmFzY3JpcHQnIHJlbmRlcmluZyBvbiAgTm9kZWpzIG9yIE5hc2hvcm4uXG5cbiAgJ2lkJyBpcyB0eXBpY2FsbHkgYSBrZXl3b3JkLiBTdXBwbGllZCBhdCBcXFwiYWRkIHRpbWVcXFwiIHNvIGl0IGNhbiBzdWJzZXF1ZW50bHlcbiAgYmUgdXNlZCBhdCBcXFwicmVtb3ZlIHRpbWVcXFwiIHRvIGdldCByaWQgb2YgdGhlIHJpZ2h0IGNhbGxiYWNrLlxuICBcIlxuICAoW2ZdXG4gICAoYWRkLXBvc3QtZXZlbnQtY2FsbGJhY2sgZiBmKSkgICA7OyB1c2UgZiBhcyBpdHMgb3duIGlkZW50aWZpZXJcbiAgKFtpZCBmXVxuICAgKHJvdXRlci9hZGQtcG9zdC1ldmVudC1jYWxsYmFjayByZS1mcmFtZS5yb3V0ZXIvZXZlbnQtcXVldWUgaWQgZikpKVxuXG5cbihkZWZuIHJlbW92ZS1wb3N0LWV2ZW50LWNhbGxiYWNrXG4gIFtpZF1cbiAgKHJvdXRlci9yZW1vdmUtcG9zdC1ldmVudC1jYWxsYmFjayByZS1mcmFtZS5yb3V0ZXIvZXZlbnQtcXVldWUgaWQpKVxuXG5cbjs7IC0tICBEZXByZWNhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7IEFzc2lzdGluZyB0aGUgdjAuNy54IC0+ICB2MC44LnggdHJhbnNpdGlvbi5cbihkZWZuIHJlZ2lzdGVyLWhhbmRsZXJcbiAgWyYgYXJnc11cbiAgKGNvbnNvbGUgOndhcm4gIFwicmUtZnJhbWU6ICBcXFwicmVnaXN0ZXItaGFuZGxlclxcXCIgaGFzIGJlZW4gcmVuYW1lZCBcXFwicmVnLWV2ZW50LWRiXFxcIiAobG9vayBmb3IgcmVnaXN0cmF0aW9uIG9mXCIgKHN0ciAoZmlyc3QgYXJncykpIFwiKVwiKVxuICAoYXBwbHkgcmVnLWV2ZW50LWRiIGFyZ3MpKVxuXG4oZGVmbiByZWdpc3Rlci1zdWJcbiAgWyYgYXJnc11cbiAgKGNvbnNvbGUgOndhcm4gIFwicmUtZnJhbWU6ICBcXFwicmVnaXN0ZXItc3ViXFxcIiBpcyBkZXByZWNhdGVkLiBVc2UgXFxcInJlZy1zdWItcmF3XFxcIiAobG9vayBmb3IgcmVnaXN0cmF0aW9uIG9mXCIgKHN0ciAoZmlyc3QgYXJncykpIFwiKVwiKVxuICAoYXBwbHkgcmVnLXN1Yi1yYXcgYXJncykpXG4iXX0=