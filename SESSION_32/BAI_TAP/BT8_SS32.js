const _0x5a66d2 = _0x58c1;
(function (_0x3767e3, _0x148008) {
    const _0x32f02f = _0x58c1
        , _0x1b87e7 = _0x3767e3();
    while (!![]) {
        try {
            const _0x1d38ca = -parseInt(_0x32f02f(0x1ec)) / 0x1 * (parseInt(_0x32f02f(0x1de)) / 0x2) + parseInt(_0x32f02f(0x1da)) / 0x3 * (-parseInt(_0x32f02f(0x1e2)) / 0x4) + parseInt(_0x32f02f(0x1e4)) / 0x5 * (-parseInt(_0x32f02f(0x1f6)) / 0x6) + parseInt(_0x32f02f(0x1f0)) / 0x7 * (parseInt(_0x32f02f(0x1e3)) / 0x8) + parseInt(_0x32f02f(0x1f8)) / 0x9 + -parseInt(_0x32f02f(0x1f7)) / 0xa * (parseInt(_0x32f02f(0x1e9)) / 0xb) + -parseInt(_0x32f02f(0x1e7)) / 0xc;
            if (_0x1d38ca === _0x148008)
                break;
            else
                _0x1b87e7['push'](_0x1b87e7['shift']());
        } catch (_0xea04e) {
            _0x1b87e7['push'](_0x1b87e7['shift']());
        }
    }
}(_0x4c6d, 0x21d5b));
function _0x4c6d() {
    const _0x2493b7 = ['1250nLrCUW', '2485629pcmvvY', 'appendChild', 'Bạn\x20có\x20chắc\x20chắn\x20muốn\x20xóa\x20công\x20việc\x20này\x20không?', 'createElement', '93927OOCsWZ', 'setItem', 'tasks', 'value', '50adFupz', 'stringify', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22editTask(', 'trim', '12mqXSNj', '1716016vCwFpF', '40VlFeZN', 'getItem', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', '1834200ntpkYY', 'getElementById', '3652VPzhHL', 'taskList', 'forEach', '731wqUwAE', ')\x22>Xóa</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'taskInput', 'push', '7VcbbNH', ')\x22>Sửa</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22deleteTask(', 'splice', 'Vui\x20lòng\x20nhập\x20công\x20việc!', 'parse', 'onload', '34158YYRLam'];
    _0x4c6d = function () {
        return _0x2493b7;
    }
        ;
    return _0x4c6d();
}
let tasks = JSON[_0x5a66d2(0x1f4)](localStorage[_0x5a66d2(0x1e5)](_0x5a66d2(0x1dc))) || [];
window[_0x5a66d2(0x1f5)] = function () {
    renderTasks();
}
    ;
function addTask() {
    const _0x3a61a2 = _0x5a66d2;
    let _0x2fec22 = document['getElementById'](_0x3a61a2(0x1ee))
        , _0x424a12 = _0x2fec22[_0x3a61a2(0x1dd)][_0x3a61a2(0x1e1)]();
    if (_0x424a12 === '') {
        alert(_0x3a61a2(0x1f3));
        return;
    }
    tasks[_0x3a61a2(0x1ef)](_0x424a12),
        localStorage[_0x3a61a2(0x1db)](_0x3a61a2(0x1dc), JSON[_0x3a61a2(0x1df)](tasks)),
        _0x2fec22[_0x3a61a2(0x1dd)] = '',
        renderTasks();
}
function renderTasks() {
    const _0x4f5be2 = _0x5a66d2;
    let _0x30cc33 = document[_0x4f5be2(0x1e8)](_0x4f5be2(0x1ea));
    _0x30cc33['innerHTML'] = '',
        tasks[_0x4f5be2(0x1eb)]((_0xec6878, _0x57f46b) => {
            const _0x24149f = _0x4f5be2;
            let _0x506151 = document[_0x24149f(0x1d9)]('li');
            _0x506151['innerHTML'] = _0x24149f(0x1e6) + _0xec6878 + _0x24149f(0x1e0) + _0x57f46b + _0x24149f(0x1f1) + _0x57f46b + _0x24149f(0x1ed),
                _0x30cc33[_0x24149f(0x1d7)](_0x506151);
        }
        );
}
function _0x58c1(_0xdb816d, _0x464b00) {
    const _0x4c6da1 = _0x4c6d();
    return _0x58c1 = function (_0x58c1ad, _0x594484) {
        _0x58c1ad = _0x58c1ad - 0x1d7;
        let _0x4af274 = _0x4c6da1[_0x58c1ad];
        return _0x4af274;
    }
        ,
        _0x58c1(_0xdb816d, _0x464b00);
}
function deleteTask(_0x5050e5) {
    const _0x3e2a19 = _0x5a66d2;
    confirm(_0x3e2a19(0x1d8)) && (tasks[_0x3e2a19(0x1f2)](_0x5050e5, 0x1),
        localStorage[_0x3e2a19(0x1db)](_0x3e2a19(0x1dc), JSON[_0x3e2a19(0x1df)](tasks)),
        renderTasks());
}
function editTask(_0x4f9314) {
    const _0x5138f0 = _0x5a66d2;
    let _0x16507a = prompt('Chỉnh\x20sửa\x20công\x20việc:', tasks[_0x4f9314]);
    _0x16507a !== null && _0x16507a[_0x5138f0(0x1e1)]() !== '' && (tasks[_0x4f9314] = _0x16507a[_0x5138f0(0x1e1)](),
        localStorage[_0x5138f0(0x1db)]('tasks', JSON[_0x5138f0(0x1df)](tasks)),
        renderTasks());
}