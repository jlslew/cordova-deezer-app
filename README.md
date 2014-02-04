# Deezer Sample Preview App

This app was made just for fun, and to see if I can build something with Cordova while talking to a REST API.  It is currently at version 1.0.0 and there are still room for improvement and new features.  The [Deezer API](http://deezer.com) was not implemented completely, for instance, the authentication part of the API.

This app allows you to:

-   search the [Deezer API](http://deezer.com),
-   to play the tracks returned from your search,
-   browse the artist page which contains the top 5 track of the artist and the list of album the artist has released,
-   browse the album page which contains the tracks released in that album

This app uses:

-   [Apache Cordova](http://cordova.apache.org)
-   [Bootstrap](http://twbs.github.io/bootstrap)
-   [jQuery](http://jquery.com)
-   [jQuery-Mobile](http://jquerymobile.com)
-   [KnockoutJS](http://knockoutjs.com)
-   [RequireJS](http://requirejs.org)

## INSTALL

I assume that you have Cordova installed, [instructions on how to install it](http://cordova.apache.org/docs/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface)

```
	cordova platform add <platform-name>
	cordova plugin add org.apache.cordova.media
	cordova build
```

## DOWNLOAD

![QR Code](https://chart.googleapis.com/chart?chs=116x116&cht=qr&chl=http://build.phonegap.com/apps/764182/install/?qr_key=BhXtgapxq2vmC6wWkgdv&chld=L|1&choe=UTF-8 "QR Code")

If you don't want to build from source, you can download a copy at [PhoneGap Build](https://build.phonegap.com/apps/764182/share).  Unfortunately, I don't have an iOS developer certificate, so I can't build the iOS version.

## LICENSE

I use the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) because it is the license that Cordova is using, and hopefully there aren't any license conflict with the libraries I am using.

Thank you,


Jonathan Lee Slew.
