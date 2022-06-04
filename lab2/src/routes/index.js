import {createRouter, createWebHistory} from "vue-router";
import NewsView from "@/components/NewsView";
import PostDetails from "@/components/PostDetails";
import CreatePost from "@/components/CreatePost";



const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "posts",
            component: NewsView,
            children:
            [
                {
                    path: "/post/:id",
                    name: "post-details",
                    component: PostDetails,
                    props: true,
                },
            ],
        },
        {
            path: "/create-post",
            name: "create",
            component: CreatePost,
        },
    ],
})

export default router;