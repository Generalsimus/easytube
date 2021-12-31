kid_css = {
    0: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px 0'
    },
    1: {
        margin: '0 5px !important',
        '& svg': {
            paddingLeft: '5px',
            width: '15px',
            height: '15px'
        }
    },
    2: {
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5px',
        borderRadius: '2px',
        cursor: 'pointer',
        width: '100%',
        background: '#eaeaea',
        fontSize: 'x-large',
        userSelect: 'none',
        '&:hover': {
            background: '#cecece'
        }
    },
    3: {
        '& *': {
            transition: 'all .2s ease-in-out'
        },
        border: '2px dotted #cecece',
        borderRadius: '5px'
    },
    4: {
        width: '100%',
        height: '200px',
        margin: '5px',
        padding: '15px !important',
        resize: 'none'
    },
    5: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    6: {
        margin: '0 5px 5px auto !important',
        padding: '0 15px !important'
    },
    7: {
        display: 'flex'
    },
    8: {
        display: 'flex',
        alignItems: 'center',
        '&:before': {
            content: '"\\f236"',
            fontFamily: 'dashicons',
            fontSize: 'large'
        },
        "& input": {
            border: 0
        }
    },
    9: {
        color: 'red',
        padding: '0px 10px',
        cursor: 'pointer'
    },
    10: {
        display: 'flex',
        alignItems: 'center'
    },
    11: {
        border: '1px solid #cecece',
        borderRadius: '2px',
        margin: '5px !important'
    },
    12: {
        '&:before': {
            content: '"\\f347"',
            fontFamily: 'dashicons',
            display: 'inline-block',
            padding: '0px 10px'
        },
        cursor: "pointer"
    }
};









(function (t, map, c, style, xhr, group) {

    var value = {}

    wp.blocks.registerBlockType('core/jsonstring', {
        title: 'JSON',
        icon: 'cloud',
        category: 'common',
        attributes: {
            content: {
                type: 'string',
                source: 'text'
            }
        },
        edit: function (p) {

            var updateFieldValue = function (val) {

                p.setAttributes({
                    content: val
                });
            }

            return wp.element.createElement(
                wp.components.TextareaControl, {
                    label: 'Dester JSON',
                    placeholder: 'JSON',
                    value: p.attributes.content,
                    onChange: updateFieldValue,

                }
            );
        },

        save: function (p) {

            return p.attributes.content;
        }

    });


    window.onload = function () {
        if (wp.data.select("core/editor").getCurrentPost().type != "video") return;



        var el = wp.element.createElement;
        wp.hooks.addFilter(
            'editor.PostFeaturedImage',
            'my-plugin/wrap-post-featured-image',
            function (OriginalComponent) {
                return function (props) {

                    try {
                        v.poster = props.media.media_details.sizes.poster.source_url;
                    } catch (e) {
                        delete v.poster;
                    }

                    setv()
                    return (
                        el(
                            wp.element.Fragment, {},
                            el(
                                OriginalComponent,
                                props
                            ),
                        )
                    );
                }
            }
        );








        var b = t(document.body).q('.editor-block-list__layout ,.block-editor-block-list__layout'),
            choo = function (v, z) {
                return [{
                    d: 'Choose Files',
                    e: {
                        click: function () {
                            var n = wp.media({
                                title: 'Choose and Upload Videos....',
                                button: {
                                    text: 'Select Video'
                                },
                                library: {
                                    type: "video"
                                },
                                multiple: true

                            })

                            n.on('select', function () {

                                var m = n.state().get('selection').toJSON();
                                map(m, function (o) {

                                    v.files.push({
                                        file: o.url,
                                        name: o.title
                                    });
                                    chfl(v.files[v.files.length - 1], v, z)
                                    setv()
                                })

                            });

                            n.open();


                        }
                    },
                    c: 2
                }]
            },
            chfl = function (o, v, d) {


                var l = v.files.length - 1

                var d = t(d, [{
                    d: [{
                        d: [{
                            s: 'X',
                            e: {
                                click: function () {
                                    v.files = map(v.files, function (i) {
                                        if (i != o) {
                                            return i;
                                        }

                                    });
                                    d.r();
                                    setv()
                                }
                            },
                            c: 9
                        }, {
                            d: [{
                                input: 0,
                                value: o.name,
                                e: {
                                    change_input: function () {
                                        o.name = this.value;
                                        setv()
                                    }
                                }
                            }],
                            c: 8
                            // s: o.name,
                            // e:{dblclick:function(){
                            //     console.log('dbclick')
                            // }},
                            // c: 8

                        }],
                        c: 10
                    }, {
                        s: 0,
                        c: 12
                    }],
                    c: [0, 11]
                }]).z
            };


        function chln(h, j, v, z) {
            return [{
                textarea: 0,
                placeholder: h,
                c: 4
            }, {
                button: j ? 'Add iFrame' : 'Add URL',
                e: {
                    click: function () {


                        if (this.p().value.length < 5) return;

                        v.files.push({
                            [j ? 'ifile' : 'file']: this.p().value,
                            name: 'iframe ' + v.files.length
                        })



                        chfl(v.files[v.files.length - 1], v, z)
                        setv()
                    }
                },
                c: ['button', 6]
            }]
        }
        try {
            v = JSON.parse(wp.blocks.parse(wp.data.select("core/editor").getEditedPostContent())[0].attributes.content);
        } catch (e) {
            v = {};
        }

        v = Object.assign({
            element: ".player",
            sources: [{
                name: 'Play List 0',
                files: []
            }]
        }, v)

        b.y().display = 'none';

        function setv() {
            wp.data.dispatch('core/block-editor').resetBlocks([wp.blocks.createBlock('core/jsonstring', {
                content: JSON.stringify(v),
            })])
        }

        function playlist(s) {

            var d = t(b.o(), [{
                d: [{
                    d: [{
                        d: [{
                            input: 0,
                            value: s.name,
                            e: {
                                change_input: function () {
                                    s.name = this.value;
                                    setv()
                                }
                            },
                            type: 'text'
                        }, {
                            button: 0,
                            for: [{
                                i: 'add new <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" fill="#3098ff"><path d="M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21  s2.224,5,4.941,5H16v11.059C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"></path></svg>',
                                e: {
                                    click: function () {

                                        v.sources.push({
                                            name: 'Play List ' + v.sources.length,
                                            files: []
                                        })

                                        playlist(v.sources[v.sources.length - 1])
                                    }
                                }
                            }, {
                                i: 'remove <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#3098ff"><path d="M14,6H2C0.896,6,0,6.896,0,8s0.896,2,2,2h12c1.104,0,2-0.896,2-2S15.104,6,14,6z"></path></svg>',
                                e: {
                                    click: function () {
                                        v.sources = map(v.sources, function (i) {
                                            if (i != s) {
                                                return i;
                                            }

                                        });
                                        d.r();
                                        if (v.sources.length == 0) {

                                            v.sources.push({
                                                name: 'Play List ' + v.sources.length,
                                                files: []
                                            })

                                            playlist(v.sources[v.sources.length - 1])
                                        }
                                        setv()
                                    }
                                }
                            }],
                            c: ['button', 'media-button', 'select-mode-toggle-button', 1]
                        }]
                    }, {
                        d: [{
                            select: [{
                                option: 0,
                                for: [{
                                    i: 'Choose Files'
                                }, {
                                    i: 'Video Link'
                                }, {
                                    i: 'iFrame Code'
                                }]
                            }],
                            e: {
                                change: function () {

                                    var j = d.h(1).h(0);

                                    j.i(' ');

                                    switch (this.value) {
                                        case 'Choose Files':
                                            j.i(choo(s, j.n()))
                                            break;
                                        case 'Video Link':
                                            j.i(chln('Video Link', 0, s, j.n()))
                                            break;
                                        case 'iFrame Code':
                                            j.i(chln('iFrame Code', 1, s, j.n()))
                                            break;
                                    }




                                }
                            }
                        }]
                    }],
                    c: 0
                }, {
                    d: [{
                        d: 0,
                        c: 5
                    }, {
                        d: 0,
                        l: function (z) {
                            z.p().i(choo(s, z))


                            map(s.files, function (j) {

                                chfl(j, s, z)
                            })

                        }
                    }],
                    c: 3
                }],
                c: Object.values(b.classList)
            }]).z
            setv()
        }
        map(v.sources, function (v, i) {
            playlist(v)

        })

    }


})(kid_t, kid_map, kid_c, kid_style, kid_xhr, kid_group)