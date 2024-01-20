class PartySheet extends FUStandardActorSheet {
    /** @override */
    getData() {
        const baseContext = super.getData();
        let partyData = [];

        game.actors.forEach((actor) => {
            let context = duplicate(baseContext);  // create a copy of the baseContext
            const actorData = actor.toObject(false);
            context.system = actorData.system;
            context.flags = actorData.flags;
            this._prepareItems(context);
            this._prepareCharacterData(context);
            partyData.push(context);

            // Print actor data to console
            console.log(context);
        });

        // store all party data in context.data
        baseContext.data = partyData;

        return baseContext;
    }

    // TODO everything else

}