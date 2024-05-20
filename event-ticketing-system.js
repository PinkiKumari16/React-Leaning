const ticketSystem = {
    totalTicket: 10000,
    reserveTicket: 100,
    ticketId:1,
    ticketIdList: {},
    getAvailableTicket(){
        console.log("Availavle Tickets:",this.totalTicket-this.reserveTicket);
    },
    bookTicket(ticketsCount){
        let availableTicket = this.totalTicket-this.reserveTicket;
        if(availableTicket >= ticketsCount){
            this.reserveTicket+=ticketsCount;
            this.totalTicket-=ticketsCount;
            this.ticketIdList[this.ticketId] = ticketsCount;
            console.log("Congrats ticket Booked!  Your ticket ID",this.ticketId);
            this.ticketId++;
        }
        else{
            console.log("Sorry! Ticket Not Can't Book, Avalible Ticket:",this.availableTicket);
        }
    },
    cencelTicket(id,cencelTicketCount){
        if(this.ticketIdList.hasOwnProperty(id)){
            let newCount = this.ticketIdList[id]-cencelTicketCount;
            if(newCount>=0){
                this.ticketIdList[id]= newCount;
                this.reserveTicket-=cencelTicketCount;
                this.totalTicket+=cencelTicketCount;
                console.log("cencel ticket successfully.")
            }
            else{
                console.log("You can't cencel more, Your booked tickets: ",this.ticketIdList[id]);
            }
        }
        else{
            console.log("booking not exist")
        }
    }

}

const input = require('readline-sync');
while(true){
    let userInput = input.question("enter the 0 for Reserve, 1 for Cancel, 2 for Check Availability, Exit for 3: ");

    if(userInput === '0'){
        ticketsCount = + input.question("enter the tickets Count: ");
        ticketSystem.bookTicket(ticketsCount)
    }
    else if(userInput === '1'){
        id= input.question("enter the ID: ");
        let cencelTicketCount = input.question("enter the ticket count: ");
        ticketSystem.cencelTicket(id, cencelTicketCount)
    }
    else if(userInput === '2'){
        ticketSystem.getAvailableTicket()
    }
    else if(userInput === '3'){
        break
    }
    else{
        console.log("enter again valid count!");
    }
}