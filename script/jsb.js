/*
 * Copyright (c) 2013-2014 Chukong Technologies Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

//
// Javascript Bindigns helper file
//

// DO NOT ALTER THE ORDER
ccrequire('script/jsb_cocos2d_constants.js');
ccrequire('script/jsb_cocos2d.js');
ccrequire('script/jsb_common.js');
ccrequire('script/jsb_property_impls.js');
ccrequire('script/jsb_property_apis.js');
ccrequire('script/jsb_create_apis.js');

if (cc.GLNode) {
    cc.GLNode.extend = cc.Class.extend; // move from jsb_cocos2d_extension
}

if (window.ccs) {
    ccrequire('script/studio/jsb_studio_boot.js');
    ccs.Armature.extend = cc.Class.extend; // move from jsb_cocos2d.js
    ccrequire('script/studio/jsb_cocos2d_studio.js');
    ccrequire('script/studio/jsb_studio_property_apis.js');
    ccrequire('script/studio/jsb_studio_create_apis.js');

    ccrequire('script/studio/jsb_studio_load.js');
    ccrequire('script/studio/parsers/action-1.x.js');
    ccrequire('script/studio/parsers/action-2.x.js');
    ccrequire('script/studio/parsers/scene-1.x.js');
    ccrequire('script/studio/parsers/timelineParser-1.x.js');
    ccrequire('script/studio/parsers/timelineParser-2.x.js');
    ccrequire('script/studio/parsers/uiParser-1.x.js');
    ccrequire('script/studio/parsers/compatible.js');
}

if (window.ccui) {
    // move from jsb_boot.js line 912
    //start------------------------------
    cc.EditBox = ccui.EditBox;
    delete ccui.EditBox;

    cc.Scale9Sprite = ccui.Scale9Sprite;

    // GUI
    /**
     * @type {Object}
     * UI Helper
     */
    ccui.helper = ccui.Helper;
    //end------------------------------

    // move from jsb_cocos2d
    //start------------------------------
    ccui.Widget.extend = cc.Class.extend;
    ccui.Button.extend = cc.Class.extend;
    ccui.CheckBox.extend = cc.Class.extend;
    ccui.ImageView.extend = cc.Class.extend;
    ccui.LoadingBar.extend = cc.Class.extend;
    ccui.RichText.extend = cc.Class.extend;
    ccui.Slider.extend = cc.Class.extend;
    ccui.Text.extend = cc.Class.extend;
    ccui.TextAtlas.extend = cc.Class.extend;
    ccui.TextBMFont.extend = cc.Class.extend;
    ccui.TextField.extend = cc.Class.extend;
    ccui.Layout.extend = cc.Class.extend;
    ccui.ListView.extend = cc.Class.extend;
    ccui.PageView.extend = cc.Class.extend;
    ccui.ScrollView.extend = cc.Class.extend;
    ccui.Scale9Sprite.extend = cc.Class.extend;
    //end------------------------------

    ccrequire('script/ccui/jsb_cocos2d_ui.js');
    ccrequire('script/ccui/jsb_ccui_property_impls.js');
    ccrequire('script/ccui/jsb_ccui_property_apis.js');
    ccrequire('script/ccui/jsb_ccui_create_apis.js');
    ccrequire('script/ccui/jsb_ccui_deprecated.js');
}

if (cc.ControlButton) {
    ccrequire('script/extension/jsb_cocos2d_extension.js');
    ccrequire('script/extension/jsb_ext_property_apis.js');
    ccrequire('script/extension/jsb_ext_create_apis.js');
}

if (cc.PhysicsSprite) {
    cc.PhysicsSprite.extend = cc.Class.extend;// move from jsb_cocos2d.js
    ccrequire('script/physicsSprite/jsb_physicsSprite.js');
}

if (window.cp) {
    // chipmunk
    ccrequire('script/chipmunk/jsb_chipmunk_constants.js');
    ccrequire('script/chipmunk/jsb_chipmunk.js');
}

ccrequire('script/jsb_opengl_constants.js');
ccrequire('script/jsb_opengl.js');
ccrequire('script/jsb_cocosbuilder.js');
ccrequire('script/jsb_deprecated.js');
ccrequire('script/jsb_loaders.js');
ccrequire('script/jsb_pool.js');

if (jsb.fileUtils.isFileExist('jsb_pluginx.js')) {
    if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID) {
        ccrequire('jsb_pluginx.js');
    }
}

if (window.sp) {
    ccrequire('script/jsb_spine.js');
}

if (jsb.Sprite3D){
    ccrequire('script/3d/jsb_cocos2d_3d.js');
}

if (jsb.ParticleSystem3D) {
    ccrequire('script/3d/jsb_cocos2d_3d_ext.js');   
}