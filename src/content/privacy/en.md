---
updated: 2026-11-24
summary: Quoin does not collect your data. There is no account, no analytics and no advertising, and your portfolio is never sent to a Quoin server, because there isn't one.
summaryMuted: What follows explains the few connections it does make, and why.
---

## Who is responsible

Aritz Martínez, developer of Quoin. For any privacy question, write to me at [quoin@aritzmmartinez.dev](mailto:quoin@aritzmmartinez.dev).

This policy covers the Quoin app for Android, the computer version and this website.

## The mobile app

### Your data stays on the phone

The transactions you import, your holdings and your settings are kept in a database inside the app. Your broker's CSV files are read on the phone and sent nowhere. The pairing with your computer is kept in Android's encrypted storage.

### What leaves the phone

The app connects directly to these two destinations, without going through any Quoin server. Nothing else: no analytics, no crash reports, no accounts.

| Destination                    | What for                                                                             | What it receives                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| European Central Bank          | Exchange rates, to value each transaction in another currency at the rate of its day | The currency code and the missing dates. Nothing about your portfolio or about you |
| Your computer, on your network | Syncing with Quoin, if you pair it                                                   | Your portfolio, encrypted, without leaving your local network                      |

As with any internet connection, the ECB receives the phone's IP address and handles it under its own terms.

### Syncing with your computer

If you pair the phone with Quoin on your computer by scanning a QR code, the two sync only within your local network, over HTTPS with the computer's certificate pinned: the QR code carries its fingerprint and the phone talks to no other machine. Before accepting the phone, the computer shows you a six-digit code to compare, and you can revoke it whenever you like.

If your computer changes address and you ask to sync, the phone looks for it only on your own network, never outside it, over mobile data or a VPN. It only sends anything to a machine presenting the certificate of a computer already paired, and never your portfolio during that search.

### Android backup

If you have Google backup turned on, your portfolio is included in it, end-to-end encrypted. The pairing with your computer and its token, the installation identifier and prices are left out: a restored phone pairs again.

### Permissions

The app uses the internet for the two destinations above, and the camera only to read the pairing QR code, which is processed on the phone, offline and without storing any image. The app does not ask for your location, your contacts or general access to your files: you pick the CSV files with Android's file picker.

### How to delete your data

Uninstall the app or clear its data in Android's settings. As there is no copy on any Quoin server, nothing is left to delete afterwards, except Google's backup if you have it turned on. Unpairing a computer deletes its pairing and token from the phone, but the computer keeps showing the phone until you revoke it there.

### Google Play

Downloads and updates are handled by Google under its own policy. Google Play shows me aggregate statistics, such as installs by country and app crashes without personal data, which I use only to improve the app.

## The computer version

It runs on your own machine and keeps its data there. Backups and access are up to you. To value your portfolio it queries the European Central Bank, Kraken (crypto prices), Yahoo Finance (share and ETF prices), Spain's INE (CPI, for real returns) and OpenFIGI (to identify securities by ISIN). Each receives the codes of the securities or currencies it is asked about, never quantities or amounts.

## This website

It is hosted on Cloudflare, which handles each visitor's IP address to serve the page and protect it from abuse, under its own privacy policy. This site uses no cookies, no analytics and no third-party scripts. The theme you choose is kept only in your browser.

Links to GitHub or Docker Hub take you to services with their own privacy policies.

## Legal bases

| Processing             | Legal basis (GDPR)                                               |
| ---------------------- | ---------------------------------------------------------------- |
| Website technical logs | Legitimate interest in the security of the service, Art. 6(1)(f) |
| Emails you send me     | Legitimate interest in answering you, Art. 6(1)(f)               |

What the app does with your portfolio happens on your phone and your computer: I do not receive that data. Emails you send me are kept as long as needed to answer you and then deleted.

## Your rights

You can ask for access, rectification, erasure, objection, restriction or portability of your data by writing to [quoin@aritzmmartinez.dev](mailto:quoin@aritzmmartinez.dev). If you think they have not been respected, you can complain to the Spanish Data Protection Agency (AEPD) at [aepd.es](https://www.aepd.es).

## Children

Quoin is not aimed at anyone under 18.

## Changes

Any change will be published here with its date. If it affects what leaves your phone or your computer, the release notes will say so too.
