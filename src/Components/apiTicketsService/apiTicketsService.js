export default class TicketService {
  _apiBase = 'https://aviasales-test-api.kata.academy'
  _searchId = this.getId()

  async getResource(url) {
    const res = await fetch(url)
    const body = await res.json()
    console.log(body)
    return body
  };

  async getId (){
    const res = await this.getResource(`${this._apiBase}/search`)
    const body = await res.json()
    console.log(body)
    return body.searchId
  };
  async getTickets (){
    const res = await this.getResource(`${this._apiBase}/tickets?searchId=${this._searchId}`)
    const ticketsData = res.tickets.map(ticket => this.__transformTicketsResults(ticket))
    return ticketsData
    // console.log(body.tickets)
  };
  __transformTicketsResults(ticket) {
    return {
      price: ticket.price,
      carrier: ticket.carrier,
      date: ticket.release_date,
      overview: ticket.overview,
      poster: ticket.poster_path,
      rating: ticket.vote_average,
      myRating: ticket.rating || 0,
      genreIdsArr: ticket.genre_ids
    }
  }
}
// getTickets()

