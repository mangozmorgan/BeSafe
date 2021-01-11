import sys
from hashlib import sha256
#entree = input('entrer le nom du fichier a chiffrer :')
#sortie = input('entrer le nom du fichier final :')
#key = input('entrer la clé voulue :')
fichierDeBAse = sys.argv[1]
newName = sys.argv[2]
mdp = sys.argv[3]
keys = sha256(mdp.encode('UTF-8')).digest()
# 'rb' r pour 'read' et 'b' pour binaire lecture en binaire du fichier 
with open(fichierDeBAse ,'rb') as f_entree:
    with open(newName ,'wb') as f_sortie:
        i=0
        while f_entree.peek():#si evenement est false on sort de la boucle
            c = ord(f_entree.read(1))#lis 1 octet (8bits)/ ord returne un binaire
            j = i%len(keys)
            b = bytes([c^keys[j]])
            f_sortie.write(b)
            i= i+1