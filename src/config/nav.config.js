

export default {
    NAV_LIST: [
        { title: '搜索', afterIcon: '', icon: 'el-icon-search', to: '' },
        { title: '首页', afterIcon: '', icon: 'el-icon-s-home', to: '/index' },
        {
            title: '发现', afterIcon: 'el-icon-arrow-down', icon: 'el-icon-menu', to: '/find',
            children:
                [
                    { title: '归档', icon: 'el-icon-s-order', afterIcon: '' },
                    { title: '分类', icon: 'el-icon-s-unfold', afterIcon: '' },
                    { title: '标签', icon: 'el-icon-price-tag', afterIcon: '' },
                ]
        },
        {
            title: '收藏', icon: 'el-icon-paperclip', afterIcon: 'el-icon-arrow-down', to: '/Collection',
            children:
                [
                    { title: '资源', afterIcon: '', icon: 'el-icon-link' },
                    { title: '相册', afterIcon: '', icon: 'el-icon-camera-solid' },
                ]
        },
        { title: '随笔', icon: 'el-icon-edit', afterIcon: '', to: '/diary' },
        { title: '关于', icon: 'el-icon-s-promotion', afterIcon: '', to: '/about' },
        {
            title: '登录', icon: 'el-icon-user-solid', afterIcon: '', to: '',
            handle: 'openModal'}
    ]
}