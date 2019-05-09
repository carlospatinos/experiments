class Cafe {
	def buyCoffe(cc: CreditCard) : (Coffee, Charge) = {
		val cup = new Coffe()
		(cup, Charge(cc, cup.price))
	}
}