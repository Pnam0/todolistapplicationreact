function List (children, ...props) {
    return <ul>{children}</ul>
}

// If this was a to List Item. I would build all the pieces as styled components. Then assemble them together.
function ListItem({name, children, ...props}) {
    return (
        <li>
            {name}
            {children}
        </li>
    )
}

export {List, ListItem}