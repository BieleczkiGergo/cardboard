# Cardboard architecture!

Hey fellow frontend development students! Are you tired of creating the same interface for your app
over and over again? Then this simple idea is just for you!

Basically, when you will have several objects you want to place and a container to hold them, we
will call that a card-board architecture. The elements that the objects are placed in are the cards
and the container that holds the cards is the board. This is the same basic layout you will make
again and again for every test, isn't it? Well, now you don't have to.

Now instead of having to create a card and a container for the data, you just do it like this:

```
<Board>
    <Card title="sometitle" fields={{
      "username" : "Gipszkarton Emil",
      "favorite pet" : "parrot"
    }}/>
  </Board>
```

Yep, you pretyy much just pass the json object to it.

You will likely be disallowed to use my library, but that's okay. Just use this as an inspiration
and make your own, because that's allowed. It's very simple too. Look at the code.
