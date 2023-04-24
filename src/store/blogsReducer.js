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
        tags: ['Tag', 'Test']
    }
]

const ADD_BLOG = "ADD_BLOG"
const DELETE_BLOG = "DELETE_BLOG"

export const blogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_BLOG:
            return [...state, action.payload]
        case DELETE_BLOG:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

export const addBlogAction = (payload) => ({type: ADD_BLOG, payload})
export const deleteBlogAction = (payload) => ({type: DELETE_BLOG, payload})