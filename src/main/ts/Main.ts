
import $ = require("jquery");
import UserView from './view/UserView';
import UserModel from './model/UserModel';

$(() => {
    var body = $("body");
    body.html('');
    body.append(new UserView({ model: new UserModel() }).render().$el);
});