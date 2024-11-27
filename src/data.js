export const data = {
    nodes: [
        {
            type: 'Numeric',
            name: 'a',
            value: 3,
            position: [0, 0]
        },
        {
            type: 'Numeric',
            name: 'b',
            value: 1,
            position: [0, 50]
        },
        {
            type: 'Numeric',
            name: 'c',
            value: 5,
            position: [300, 180]
        },
        {
            type: 'Function',
            name: 'sum',
            expression: `({a, b}) => {
                return new Promise((r) => {
                    setTimeout(() => {
                        r(a+b);
                    }, 800);
                })
            }`,
            position: [150, 25]
        },
        {
            type: 'Function',
            name: 'multiple',
            expression: `({a, b}) => {
                return new Promise((r) => {
                    setTimeout(() => {
                        r(a*b);
                    }, 500);
                })
            }`,
            position: [450, 125]
        },
    ],
    links: [
        ['a', 'sum', 'a'],
        ['b', 'sum', 'b'],
        ['sum', 'multiple', 'a'],
        ['c', 'multiple', 'b'],
    ]
}