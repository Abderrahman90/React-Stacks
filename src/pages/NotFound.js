import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>Erreur 404, Peugeot connait ça :) !</h1>
                <p>Pour aller plus loin cliquez sur ce lien ci-dessous</p>
                <a href="https://fr.wikipedia.org/wiki/Peugeot_404">Ici 404</a>
            </div>
        );
    }
}

export default NotFound;