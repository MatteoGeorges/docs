---
id: overview
title: Overview
sidebar_position: 1
---

---

The Astraly protocol aims to provide an on-chain architecture that allows anyone to build their own reputation system. It is composed of two major parts, which are the Badges and Scores (aggregation of the different badges).

## Badges

Badges are non transferable tokens representing an achievement (on-chain transaction, event attendance, contribution etc.).
These badges require no third-party or off-chain data services to be proven making them fully trustless.
They also have the possibility to be privacy-preserving, thanks to the zk-STARKS, and thus make the badges zero knowledge.

[**Read more about the badges**](/)

## Scores

Astraly Badges have a unique utility but cannot cover all possible use cases. In fact, many applications offer, and many will offer in the future, all kinds of badges, testifying of different activities/achievements. Hence, the aggregation of all these badges is essential in order to give meaning to the users' on-chain identity.

  <div>
  <img width="100%" height="100%" src="https://4086585041-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FG0TggWALo9xfCaYfuNXI%2Fuploads%2Fb7neAXMq0iTI5xtABE9e%2FScreenshot%202022-09-15%20at%2018.30.15.png?alt=media&token=3bcd0ad9-9231-4c3b-a2ca-6647c086a7f4" />
  </div>

The straightforward way to aggregate these badges is to create a score. However, this score cannot be unique, since as stated in the introduction, a reputation is vertical relevant, i.e. context-dependent. This means that a person X can be reputed in domain Y, but not in domain Z. Hence the score must be scalable but must meet certain characteristics.
Furthermore, a multitude of scores can be extracted from the different on-chain graphs and can be used for different use cases.

[**Read more about Scores**](/)
