import img1 from 'assets/images/blog1_1.jpg'
import img2 from 'assets/images/blog1_2.jpg'
import img3 from 'assets/images/blog1_3.jpg'

const defaultState = [
    {
        id: '1',
        title: 'Test 1',
        subtitle: 'Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        date: '20 Mar 2003',
        descr: [
            {
                title: 'Lorem ipsum',
                text: 'Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            {
                title: 'Lorem ipsum 2',
                text: 'Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            {
                title: 'Lorem ipsum 3',
                text: 'Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            }
        ],
        preview: img1,
        images: [img2, img3],
        tags: ['Tag', 'Test'],
        comments: [
            {
                name: 'hiblurryface',
                email: 'alexandorksenz@gmail.com',
                date: '20 March 2003',
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores, voluptas eligendi quae consequatur ducimus rerum, voluptate enim explicabo exercitationem blanditiis, praesentium laudantium debitis modi dolores temporibus vel necessitatibus ipsam?'
            }
        ]
    }
]

const ADD_BLOG = "ADD_BLOG"
const DELETE_BLOG = "DELETE_BLOG"
const ADD_COMMENT = "ADD_COMMENT"

export const blogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_BLOG:
            return [...state, action.payload]
        case DELETE_BLOG:
            return state.filter(item => item.id !== action.payload);
        case ADD_COMMENT:
            return state.map(item => item.id === action.id ? {...action.blog, comments: [...item.comments, action.payload]} : item) 
        default:
            return state;
    }
}

export const addBlogAction = (payload) => ({ type: ADD_BLOG, payload })
export const deleteBlogAction = (payload) => ({ type: DELETE_BLOG, payload })
export const addCommentAction = (id, blog, payload) => ({ type: ADD_COMMENT, id, blog, payload })