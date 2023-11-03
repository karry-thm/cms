# Directus (DEFEKT stand: 21.04.2022)

Startet [Directus](https://duckduckgo.com).

Befehl zu starten: ```docker-compose up``` (muss in diesem Ordner ausgeführt werden)

Directus ist danach auf dem Port ```8055``` erreichbar.

Name der Variable | Wert
---|---
KEY | 255d861b-5ea1-5996-9aa3-922530ec40b1
SECRET | 6116487b-cda1-52c2-b5b5-c8022c45e263
ADMIN_EMAIL | admin@admin.com
ADMIN_PASSWORD | admin


## Node-Red für Webhhooks

Um mit Webhooks zu experimentieren wird ein Node-Red eingerichtet. Dieses hat den Hostnamen ```nodered``` und läuft auf Port ```1880```. Von Directus aus startet eine Webhook-Referenz mit ```http://nodered:1880```. Die Adresse muss um den eingerichteten Pfad ergänzt werden.