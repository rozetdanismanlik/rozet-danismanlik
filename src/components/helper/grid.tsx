import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const px = n => typeof n === 'number' ? n + 'px' : n

const width = props => ({
    gridTemplateColumns: `repeat(auto-fit, minmax(${px(props.width)}, 1fr))`
})

const gap = props => ({
    gridGap: px(props.gap)
})

const align = props => props.align ? ({
    alignItems: props.align
}) : null

const span = props => props.span ? ({
    gridColumn: `span ${props.span}`
}) : null

const Grid = styled.div([], {
    display: 'grid'
},
    width,
    gap,
    align
)

Grid.propTypes = {
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    gap: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    align: PropTypes.string
}

Grid.defaultProps = {
    width: 320,
    gap: 32
}

Grid.Item = styled.div([], span)

export default Grid