angular.module('myApp').constant("sider", [
    {
        firstList: "信息管理",
        secondList: [
            {
                title: "公司列表", url: ".conpany"
            },
            {
                title: "职位列表", url: ".job"
            }
        ],
        isShow: false

    },
    {
        firstList: "Article管理",
        secondList: [
            {
                title: "Article列表", url: ".articleList({page:1,size:10})"
            },
            {
                title: "文章管理", url: ".text"
            }
        ],
        isShow: false
    }
]);