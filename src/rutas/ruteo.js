'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'inicio.html', true),
            new Route('rollist', 'roles/rollistado.html'),
            new Route('roladd', 'roles/rolcrear.html'),
            new Route('rolmanage', 'roles/roladmin.html'),
            new Route('roldelete', 'roles/roleliminar.html'),
            new Route('login', 'acceso.html')
        ]);
    }
    init();
}());
