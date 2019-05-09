#!/bin/bash
isoName=ERICtor_CXP9024257-3.12.11_syncMoci_19.iso #ERICtor_CXP9024257-3.12.15.iso
drop=3.0.N

baseDir=/var/tmp/tor
rpmsPath=$baseDir/tor_rpms # Directory to store rpms to be copied
torIso=$baseDir/tor_iso
torTest=$baseDir/test
torUtils=$baseDir/tor_utils
# wget https://cifwk-oss.lmera.carloscompany.se/TOR/$drop/media/
# Create /var/tmp/tor/tor_iso/ if it does not exist
mkdir -p $torIso
mkdir -p $torUtils
mkdir -p $torTest/products/TOR/$drop

cd $baseDir
mount -o loop $isoName $torIso
cp $torIso/products/TOR/$drop/* $torTest/products/TOR/$drop

umount $torIso

for rpmFile in `ls -l tor_rpms/ | awk {'print $9'} | cut -f1 -d"-"`; do 
	#ls -l $baseDir/test | grep $rpmFile
	fileToRemove=`ls -l $torTest/products/TOR/$drop/ | grep $rpmFile | awk {'print $9'}`
	echo "removing -> $torTest/products/TOR/$drop/$fileToRemove" 
	rm $torTest/products/TOR/$drop/$fileToRemove
done

cp $rpmsPath/*  $torTest/products/TOR/$drop

mkisofs -r -o $baseDir/$isoName $torTest/

mount -o loop $baseDir/$isoName $torIso
rm $torUtils/ERICtorinst_*.rpm
cp $torIso/products/TOR/$drop/ERICtorinst_CXP902330*.rpm $torUtils
rm $torUtils/ERICtorutilities*.rpm
cp $torIso/products/TOR/$drop/ERICtorutilities*.rpm $torUtils
umount $torIso


for rpmFile in `ls -l $tor_utils/*.rpm | awk {'print $9'} | cut -f1 -d"-"`; do 
	fileToInstall=`ls -l $torUtils/ | grep $rpmFile | awk {'print $9'}`
	echo "rpm -Uhv $torUtils/$fileToInstall" 
	#rpm -Uhv $torUtils/$fileToInstall
done

