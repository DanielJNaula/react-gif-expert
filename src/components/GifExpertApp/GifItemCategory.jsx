import PropTypes from 'prop-types'

export const GifItemCategory = ( { title, url, id } ) => {

  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

GifItemCategory.propTypes = {
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
};
