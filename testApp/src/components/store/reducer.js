import { SET_ACTIVE_TAB, CLEAR_ACTIVE_TAB, SET_ACTIVE_MENU, CLEAR_ACTIVE_MENU, TO_OPEN_MENU, TO_OPEN_SECOND_MENU } from './actions'

const initialState = {
    tabsAmount: [1, 2, 3, 4, 5, 6],
    activeTab: null,
    activeHover: false,
    openMenu: 0,
    openSecondMenu: 0,
    data: [{
        id: 1,
        title: 'Заголовок 1',
        path: '/page1',
        items: [{
            id: 1.1,
            title: 'Заголовок 1.1',
            path: '/page1.1',
            items: [{
                id: '1.1.1',
                title: 'Заголовок 1.1.1',
                path: '/page1.1.1',
                items: []
            }, {
                id: '1.1.2',
                title: 'Заголовок 1.1.2',
                path: '/page1.1.2',
                items: []
            }]
        }, {
            id: 1.2,
            title: 'Заголовок 1.2',
            path: '/page1.2',
            items: [{
                id: '1.2.1',
                title: 'Заголовок 1.2.1',
                path: '/page1.2.1',
                items: []
            }, {
                id: '1.2.2',
                title: 'Заголовок 1.2.2',
                path: '/page1.2.2',
                items: []
            }]
        }, {
            id: 1.3,
            title: 'Заголовок 1.3',
            path: '/page1.3',
            items: [{
                id: '1.3.1',
                title: 'Заголовок 1.3.1',
                path: '/page1.3.1',
                items: []
            }, {
                id: '1.3.2',
                title: 'Заголовок 1.3.2',
                path: '/page1.3.2',
                items: []
            }]
        }, {
            id: 1.4,
            title: 'Заголовок 1.4',
            path: '/page1.4',
            items: [{
                id: '1.4.1',
                title: 'Заголовок 1.4.1',
                path: '/page1.4.1',
                items: []
            }, {
                id: '1.4.2',
                title: 'Заголовок 1.4.2',
                path: '/page1.4.2',
                items: []
            }]
        }, {
            id: 1.5,
            title: 'Заголовок 1.5',
            path: '/page1.5',
            items: [{
                id: '1.5.1',
                title: 'Заголовок 1.5.1',
                path: '/page1.5.1',
                items: []
            }, {
                id: '1.5.2',
                title: 'Заголовок 1.5.2',
                path: '/page1.5.2',
                items: []
            }]
        }, {
            id: 1.6,
            title: 'Заголовок 1.6',
            path: '/page1.6',
            items: [{
                id: '1.6.1',
                title: 'Заголовок 1.6.1',
                path: '/page1.6.1',
                items: []
            }, {
                id: '1.6.2',
                title: 'Заголовок 1.6.2',
                path: '/page1.6.2',
                items: []
            }]
        }]
    },
    {
        id: 2,
        title: 'Заголовок 2',
        path: '/page2',
        items: [{
            id: 2.1,
            title: 'Заголовок 2.1',
            path: '/page2.1',
            items: [{
                id: '2.1.1',
                title: 'Заголовок 2.1.1',
                path: '/page2.1.1',
                items: []
            }, {
                id: '2.1.2',
                title: 'Заголовок 2.1.2',
                path: '/page2.1.2',
                items: []
            }]
        }, {
            id: 2.2,
            title: 'Заголовок 2.2',
            path: '/page2.2',
            items: [{
                id: '2.2.1',
                title: 'Заголовок 2.2.1',
                path: '/page2.2.1',
                items: []
            }, {
                id: '2.2.2',
                title: 'Заголовок 2.2.2',
                path: '/page2.2.2',
                items: []
            }]
        }, {
            id: 2.3,
            title: 'Заголовок 2.3', 
            path: '/page2.3',
            items: [{
                id: '2.3.1',
                title: 'Заголовок 2.3.1',
                path: '/page2.3.1',
                items: []
            }, {
                id: '2.3.2',
                title: 'Заголовок 2.3.2',
                path: '/page2.3.2',
                items: []
            }]
        }, {
            id: 2.4,
            title: 'Заголовок 2.4',
            path: '/page2.4',
            items: [{
                id: '2.4.1',
                title: 'Заголовок 2.4.1',
                path: '/page2.4.1',
                items: []
            }, {
                id: '2.4.2',
                title: 'Заголовок 2.4.2',
                path: '/page2.4.2',
                items: []
            }]
        }, {
            id: 2.5,
            title: 'Заголовок 2.5',
            path: '/page2.5',
            items: [{
                id: '2.5.1',
                title: 'Заголовок 2.5.1',
                path: '/page2.5.1',
                items: []
            }, {
                id: '2.5.2',
                title: 'Заголовок 2.5.2',
                path: '/page2.5.2',
                items: []
            }]
        }, {
            id: 2.6,
            title: 'Заголовок 2.6',
            path: '/page2.6',
            items: [{
                id: '2.6.1',
                title: 'Заголовок 2.6.1',
                path: '/page2.6.1',
                items: []
            }, {
                id: '2.6.2',
                title: 'Заголовок 2.6.2',
                path: '/page2.6.2',
                items: []
            }]
        }]
    },
    {
        id: 3,
        title: 'Заголовок 3',
        path: '/page3',
        items: [{
            id: 3.1,
            title: 'Заголовок 3.1',
            path: '/page3.1',
            items: [{
                id: '3.1.1',
                title: 'Заголовок 3.1.1',
                path: '/page3.1.1',
                items: []
            }, {
                id: '3.1.2',
                title: 'Заголовок 3.1.2',
                path: '/page3.1.2',
                items: []
            }]
        }, {
            id: 3.2,
            title: 'Заголовок 3.2',
            path: '/page3.2',
            items: [{
                id: '3.2.1',
                title: 'Заголовок 3.2.1',
                path: '/page3.2.1',
                items: []
            }, {
                id: '3.2.2',
                title: 'Заголовок 3.2.2',
                path: '/page3.3.2',
                items: []
            }]
        }, {
            id: 3.3,
            title: 'Заголовок 3.3',
            path: '/page3.3',
            items: [{
                id: '3.3.1',
                title: 'Заголовок 3.3.1',
                path: '/page3.3.1',
                items: []
            }, {
                id: '3.3.2',
                title: 'Заголовок 3.3.2',
                path: '/page3.3.2',
                items: []
            }]
        }, {
            id: 3.4,
            title: 'Заголовок 3.4',
            path: '/page3.4',
            items: [{
                id: '3.4.1',
                title: 'Заголовок 3.4.1',
                path: '/page3.4.1',
                items: []
            }, {
                id: '3.4.2',
                title: 'Заголовок 3.4.2',
                path: '/page3.4.2',
                items: []
            }]
        }, {
            id: 3.5,
            title: 'Заголовок 3.5',
            path: '/page3.5',
            items: [{
                id: '3.5.1',
                title: 'Заголовок 3.5.1',
                path: '/page3.5.1',
                items: []
            }, {
                id: '3.5.2',
                title: 'Заголовок 3.5.2',
                path: '/page3.5.2',
                items: []
            }]
        }, {
            id: 3.6,
            title: 'Заголовок 3.6',
            path: '/page3.6',
            items: [{
                id: '3.6.1',
                title: 'Заголовок 3.6.1',
                path: '/page3.6.1',
                items: []
            }, {
                id: '3.6.2',
                title: 'Заголовок 3.6.2',
                path: '/page3.6.2',
                items: []
            }]
        }]
    },
    {
        id: 4,
        title: 'Заголовок 4',
        path: '/page4',
        items: [{
            id: 4.1,
            title: 'Заголовок 4.1',
            path: '/page4.1',
            items: [{
                id: '4.1.1',
                title: 'Заголовок 4.1.1',
                path: '/page4.1.1',
                items: []
            }, {
                id: '4.1.2',
                title: 'Заголовок 4.1.2',
                path: '/page4.1.2',
                items: []
            }]
        }, {
            id: 4.2,
            title: 'Заголовок 4.2',
            path: '/page4.2',
            items: [{
                id: '4.2.1',
                title: 'Заголовок 4.2.1',
                path: '/page4.2.1',
                items: []
            }, {
                id: '4.2.2',
                title: 'Заголовок 4.2.2',
                path: '/page4.2.2',
                items: []
            }]
        }, {
            id: 4.3,
            title: 'Заголовок 4.3',
            path: '/page4.3',
            items: [{
                id: '4.3.1',
                title: 'Заголовок 4.3.1',
                path: '/page4.3.1',
                items: []
            }, {
                id: '4.3.2',
                title: 'Заголовок 4.3.2',
                path: '/page4.3.2',
                items: []
            }]
        }, {
            id: 4.4,
            title: 'Заголовок 4.4',
            path: '/page4.4',
            items: [{
                id: '4.4.1',
                title: 'Заголовок 4.4.1',
                path: '/page4.4.1',
                items: []
            }, {
                id: '4.4.2',
                title: 'Заголовок 4.4.2',
                path: '/page4.4.2',
                items: []
            }]
        }, {
            id: 4.5,
            title: 'Заголовок 4.5',
            path: '/page4.5',
            items: [{
                id: '4.5.1',
                title: 'Заголовок 4.5.1',
                path: '/page4.5.1',
                items: []
            }, {
                id: '4.5.2',
                title: 'Заголовок 4.5.2',
                path: '/page4.5.2',
                items: []
            }]
        }, {
            id: 4.6,
            title: 'Заголовок 4.6',
            path: '/page4.6',
            items: [{
                id: '4.6.1',
                title: 'Заголовок 4.6.1',
                path: '/page4.6.1',
                items: []
            }, {
                id: '4.6.2',
                title: 'Заголовок 4.6.2',
                path: '/page4.6.2',
                items: []
            }]
        }
        ]
    },
    {
        id: 5,
        title: 'Заголовок 5',
        path: '/page5',
        items: [{
            id: 5.1,
            title: 'Заголовок 5.1',
            path: '/page5.1',
            items: [{
                id: '5.1.1',
                title: 'Заголовок 5.1.1',
                path: '/page5.1',
                items: []
            }, {
                id: '5.1.2',
                title: 'Заголовок 5.1.2',
                path: '/page5.1.2',
                items: []
            }]
        }, {
            id: 5.2,
            title: 'Заголовок 5.2',
            path: '/page5.2',
            items: [{
                id: '5.2.1',
                title: 'Заголовок 5.2.1',
                path: '/page5.2.1',
                items: []
            }, {
                id: '5.2.2',
                title: 'Заголовок 5.2.2',
                path: '/page5.2.2',
                items: []
            }]
        }, {
            id: 5.3,
            title: 'Заголовок 5.3',
            path: '/page5.3',
            items: [{
                id: '5.3.1',
                title: 'Заголовок 5.3.1',
                path: '/page5.3.1',
                items: []
            }, {
                id: '5.3.2',
                title: 'Заголовок 5.3.2',
                path: '/page5.3.2',
                items: []
            }]
        }, {
            id: 5.4,
            title: 'Заголовок 5.4',
            path: '/page5.4',
            items: [{
                id: '5.4.1',
                title: 'Заголовок 5.4.1',
                path: '/page5.4.1',
                items: []
            }, {
                id: '5.4.2',
                title: 'Заголовок 5.4.2',
                path: '/page5.4.2',
                items: []
            }]
        }, {
            id: 5.5,
            title: 'Заголовок 5.5',
            path: '/page5.5',
            items: [{
                id: '5.5.1',
                title: 'Заголовок 5.5.1',
                path: '/page5.5.1',
                items: []
            }, {
                id: '5.5.2',
                title: 'Заголовок 5.5.2',
                path: '/page5.5.2',
                items: []
            }]
        }, {
            id: 5.6,
            title: 'Заголовок 5.6',
            path: '/page5.6',
            items: [{
                id: '5.6.1',
                title: 'Заголовок 5.6.1',
                path: '/page5.6.1',
                items: []
            }, {
                id: '5.6.2',
                title: 'Заголовок 5.6.2',
                path: '/page5.6.2',
                items: []
            }]
        }]
    },
    {
        id: 6,
        title: 'Заголовок 6',
        path: '/page6',
        items: [{
            id: 6.1,
            title: 'Заголовок 6.1',
            path: '/page6.1',
            items: [{
                id: '6.1.1',
                title: 'Заголовок 6.1.1',
                path: '/page6.1.1',
                items: []
            }, {
                id: '6.1.2',
                title: 'Заголовок 6.1.2',
                path: '/page6.1.2',
                items: []
            }]
        }, {
            id: 6.2,
            title: 'Заголовок 6.2',
            path: '/page6.2',
            items: [{
                id: '6.2.1',
                title: 'Заголовок 6.2.1',
                path: '/page6.2.1',
                items: []
            }, {
                id: '6.2.2',
                title: 'Заголовок 6.2.2',
                path: '/page6.2.2',
                items: []
            }]
        }, {
            id: 6.3,
            title: 'Заголовок 6.3',
            path: '/page6.3',
            items: [{
                id: '6.3.1',
                title: 'Заголовок 6.3.1',
                path: '/page6.3.1',
                items: []
            }, {
                id: '6.3.2',
                title: 'Заголовок 6.3.2',
                path: '/page6.3.2',
                items: []
            }]
        }, {
            id: 6.4,
            title: 'Заголовок 6.4',
            path: '/page6.4',
            items: [{
                id: '6.4.1',
                title: 'Заголовок 6.4.1',
                path: '/page6.4.1',
                items: []
            }, {
                id: '6.4.2',
                title: 'Заголовок 6.4.2',
                path: '/page6.4.2',
                items: []
            }]
        }, {
            id: 6.5,
            title: 'Заголовок 6.5',
            path: '/page6.5',
            items: [{
                id: '6.5.1',
                title: 'Заголовок 6.5.1',
                path: '/page6.5.1',
                items: []
            }, {
                id: '6.5.2',
                title: 'Заголовок 6.5.2',
                path: '/page6.5.2',
                items: []
            }]
        }, {
            id: 6.6,
            title: 'Заголовок 6.6',
            path: '/page6.6',
            items: [{
                id: '6.6.1',
                title: 'Заголовок 6.6.1',
                path: '/page6.6.1',
                items: []
            }, {
                id: '6.6.2',
                title: 'Заголовок 6.6.2',
                path: '/page6.6.2',
                items: []
            }]
        }]
    }]
}

export function dataReducer(state = initialState, action) {
    switch (action.type) {

        case SET_ACTIVE_TAB: {
            return {
                ...state,
                activeTab: action.payload,
            }
        }

        case CLEAR_ACTIVE_TAB: {
            return {
                ...state,
                activeTab: null
            }
        }

        case SET_ACTIVE_MENU: {
            return {
                ...state,
                activeHover: !state.activeHover
            }
        }

        case CLEAR_ACTIVE_MENU: {
            return {
                ...state,
                activeHover: !state.activeHover
            }
        }

        case TO_OPEN_MENU: {
            return {
                ...state,
                openMenu: action.payload
            }
        }

        case TO_OPEN_SECOND_MENU: {
            return {
                ...state,
                openSecondMenu: action.payload
            }
        }

        default: return state
    }

}