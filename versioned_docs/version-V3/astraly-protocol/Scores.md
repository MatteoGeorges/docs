---
id: scores
title: Scores
sidebar_position: 4
---

---

Scores are what make sense of the different badges a user has. Scores are on-chain information, which is attached to the user calculating his score and can be hidden or not thanks to the zero-knowledge proofs. For the moment, mainly two types of scores can be used, which are custom scores and clustering scores. Other types of scores will be available at a later date, depending on needs, particularly for governance and gaming applications.

## Custom scores

Custom scores are the most basic components of the protocol. The idea is to offer to anyone, and in a trustless way, the possibility to create his own custom score from different badges, available on the protocol. Weights, badges and all score parameters are customisable and can be combined with scores already created.

 <div>
  <img width="100%" height="100%" src="https://4086585041-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FG0TggWALo9xfCaYfuNXI%2Fuploads%2FHlbpZ3AvnVpcaHp2to5q%2Fscorer_highlevel.png?alt=media&token=1ca93c99-4b5c-4e4d-88fe-243057b23878" />
  </div>

Above, a high-level overview of the Astraly Scoring System. Let's dive into it.
Anyone, yes anyone, can create a Scorer which is a contract which given a Handler and a set of Badges will let anyone (yes anyone again) compute their score. This system does not rely on any 3rd party nor trust assumptions.

## Handlers

A Handler is an algorithm that given a set of parameters will produce an output between 0 and 1.
It's an abstract Interface that can be implemented in multiple ways in order to achieve different types of scores.

With [**Cairo 1.0**](https://medium.com/starkware/cairo-1-0-aa96eefb19a0) release, traits will enforce handlers all follow the same exact behavior.

@contract_interface
namespace IHandler {

    func compute() -> (score: felt) {
    }

    // Should be called at initialization
    func update(b: Badges*) -> (score: felt) {
    }

}

A few examples of handlers :

- [**Custom Weighted Average**](https://en.wikipedia.org/wiki/Weighted_arithmetic_mean)
- Supply Relative
- [**K-Means Clustering**](https://en.wikipedia.org/wiki/K-means_clustering)
- Neural Network
- [**Matrix Factorization**](<https://en.wikipedia.org/wiki/Matrix_factorization_(recommender_systems)>)
- [**Betweenness centrality**](https://en.wikipedia.org/wiki/Betweenness_centrality)
- Category-based
- Literally Anything

When implementing a handler, one can choose to leverage fully the capacity of Starknet and make all the computation fully on-chain. Someone else could leverage ZKP to preserve the trustless property while doing most of the computation off-chain.

With this approach we aim to see which models and algorithms end up being more relevant whatever the context they are being used in.

## Badges

A Badge is a digital token that represents any kind of achievement(s) or commitment(s).
A few examples of existing badges :

- [**Sismo**](https://docs.sismo.io/sismo-docs/)
- [**Galxe**](https://galxe.com/)
- [**Dework**](https://dework.xyz/)
- [**Coordinape**](https://coordinape.com/)
- [**Kudos**](https://mintkudos.xyz/)
- [**Mazury**](https://mazury.xyz/)
- [**Humanbound**](https://humanbound.xyz/)
- [**POAP**](https://poap.xyz/)

Any kind of badge can be used within the Scorer once it has been registered for use in the contract. As all these badges follow different standards (ERC-1155, ERC-721, ERC-4973...), we only care about the balanceOf method.

A scorer operates on a specific set of badges chosen at its creation.

When a user wants to compute his score, we get the storage proofs for the badges in the user wallet(s) which is a subset of the scorer set. Therefore, Astraly doesn't rely on any 3rd party, oracle or off-chain infrastructure to ensure an address holds a set of badges.

For more information on storage proofs, we highly encourage you to check this [**presentation**](https://www.youtube.com/watch?v=NN7m7bfE-vw&list=PLcIyXLwiPilXArkrdDypDDE05DtkYuS1n&index=15&themeRefresh=1) given by [**Marcello**](https://twitter.com/0xmarcello) at StarknetCC.

## Correlation scores

The first type of score which will be made available on the Astraly platform is the correlation score. Indeed, as described in the introduction, badges allow linking the different users of a network, forming the edges of a graph linking the different users of the network. From there, a social graph using badges as edges is built. Using this graph, correlation scores are extracted, which have many uses, including governance and airdrops. In order to fit these use cases in the most transparent way possible, clustering and factoring algorithms are run at regular intervals, making the whole process transparent, and favouring fair use. In order to run these algorithms, Astraly uses [**Modulus Labs**](https://www.moduluslabs.xyz/), an infrastructure for running on-chain Machine Learning models.

 <div>
  <img width="100%" height="100%" src="https://4086585041-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FG0TggWALo9xfCaYfuNXI%2Fuploads%2F0KmtdAZEFJGITiyfmk8t%2FScreenshot%202022-09-15%20at%2019.08.38.png?alt=media&token=86f6513a-411c-4075-b998-5229c7e05632" />
  </div>
