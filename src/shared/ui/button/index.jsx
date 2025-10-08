export default function Index({children, variant = 'primary', ...props}) {
    const classes = ['btn']
    if (variant !== 'primary')
        classes.push(variant)
    return (
        <button className={classes.join(' ')} {...props}>
            {children}
        </button>
    )
}
