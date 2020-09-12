## Dead Simple Level Generator
This is an incredibly simple and fast way to quickly create greybox levels in Unity3D.  The app consists of a simple web app where you can mock up and export level designs, and a Unity script to turn those designs into 3D levels.

### Usage
Visit the web app and design the layout of your level. Click "Download world" to download the layout in JSON format.   
You can find the web app hosted free here: https://silly-kirch-b84f25.netlify.app/

![Editing level](https://i.imgur.com/hbVGmCD.gif)

In unity, import the `.unitypackage` included in this repo. Add the DSLG prefab to your scene.
Paste the contents of the JSON file into the JSON String field of the DSLG prefab, Then click the `Generate` button.

![Generating level](https://i.imgur.com/0JtLXTq.gif)

Finally, customize the look of your level by using your own floor / wall prefabs.

![layout](https://i.imgur.com/vOb68e1.png)
![layout](https://i.imgur.com/BKRWlHs.png)
![layout](https://i.imgur.com/QbxRLhE.png)
![layout](https://i.imgur.com/swjfoIJ.png)
