INPUT=$1
cat standard.header > $INPUT.tmp
cat $INPUT >> $INPUT.tmp
mv $INPUT.tmp $INPUT
sed -i "" '/\/\/  Created by/d' $INPUT
sed -i "" '/\/\/  Generated by/d' $INPUT

