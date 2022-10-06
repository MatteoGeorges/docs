---
id: scores
title: Scores
sidebar_position: 3
---

---

Astraly Badges are non-transferable NFTs following the [**ERC-4973**](https://eips.ethereum.org/EIPS/eip-4973) standard, adapted to Starknet's Account Abstraction model.

A badge can represent any kind of on-chain activity :

User A was holding at least 1 ETH before the DAO hack
User A was holding at least 2 ENS domains on 08/09/2020
User A added liquidity to the ETH/USDC pool on Uniswap V2 for at least 1000$ during the covid crackdown
User A interacted with Aave, Compound and Curve in 2020
User A posted 50+ posts using Lens social graph

Imagine any kind of on-chain activity, well you'll be able to mint a badge certifying it.

  <div>
  <img width="100%" height="100%" src="https://4086585041-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FG0TggWALo9xfCaYfuNXI%2Fuploads%2FdMgcBDwaUZjnVtY9jqT2%2Fimage.png?alt=media&token=abcbb5fd-e76d-43ea-89bc-8288c2f477f0" />
  </div>

Astraly Badges have the following properties :

TRUSTLESS
INTEROPERABLE
COMPOSABLE
ZERO-KNOWLEDGE

Let's explore each of these properties that make Astraly Badges unique.

## Trustless

Astraly is built on top of [**Fossil**](https://github.com/OilerNetwork/fossil) which is a Starknet native library that allows us to read all historical L1's(or other L2s) data and use it in a fully trustless manner. We recommend reading this article for a more thorough introduction.
Regarding storage proofs, the only trust assumption is that the blockhash returned from the Ethereum provider belongs to the claimed block. If you're using your own node, then there is nothing to trust.

## Interoperable

Badges can be used anywhere with any tooling that supports ERC-721.
Therefore, you can gate access to your Discord using https://guild.xyz/, build custom user feeds using https://lens.xyz/ and more...

## Composable

Badges can be composed together to form more complex kinds of badges.
Let's say you want to create a Lending Master badge.
You could take Aave, Compound and ZkLend badges and combine them together using an OR relationship. Any kind of conditional expression can be used to combine them and properties will be kept as they are grouped.
Anyone can create an Astraly Badge! So feel free to create yours and see if it gets some interest. With this collective approach, we aim to find the most relevant kind of badges aka. on-chain activities that exist and form your digital identity.

## Zero-Knowledge

Astraly Badges can be made private so that they do not reveal any information about the user that signed the message used to mint the badge.
STARK proofs are used to achieve full privacy, along with the [**Giza prover**](https://github.com/maxgillett/giza) which is still under development. We highly recommend going over [**Max Gillet's repo**](https://github.com/maxgillett/stark-attestations) which Astraly is built upon.
You can contribute to the Giza development and be rewarded thanks to [**OnlyDust**](https://app.onlydust.xyz/projects/476401778)

## Soulbound

Astraly Badges are "soulbound" or "account-bound". However, on Starknet we have native Account Abstraction which you can learn more about here.

As every account is a smart-contract we re-adapted the ERC-4973 standard to fit these constraints and ensure two things :

Users can choose whether to display publicly their badges
Users can transfer their badges freely with the right signature being provided

On every public key change, the right signature needs to be provided to retrieve all badges linked to that account
You can find the latest implementation on our GitHub.

## Future developments

Astraly badges will be improved drastically as we grow and evolve.
A few things we're working on and that will come in future versions of the badges :

- Badges issued from on-chain activity on other L2s such as Optimism, Arbitrum or Polygon
- Enable anyone to generate a proof locally in a short time < 1 min to achieve full privacy
- Trustless bridge so that badges can be used on other chains
- Fully-fledged badges that not only use storage root but also receipt root and transactions root. The end goal is to make every kind of on-chain activity issuable as an Astraly Badge. e.g : A badge that proves you've executed specific transactions, or/and that specific events have been emitted, or/and that you hold a specific balance of a token at a certain point in time
