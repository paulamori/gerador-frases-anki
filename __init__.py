import os
from aqt import gui_hooks

pastaAddon= os.path.dirname(__file__)

def lerArquivo(nomeArquivo):
    caminho= os.path.join(pastaAddon,"web",nomeArquivo)
    with open(caminho,"r",encoding="utf-8") as f:
        return f.read()

def renderizarDecks(deck_browser,content):
    meuCSS= f"<style>{lerArquivo('style.css')}</style>"
    meuJS=f"<script>{lerArquivo('script.js')}</script>"
    meuHTML='<div id="minhaFrase">Carregando a frase...</div>'

    content.tree= meuHTML + meuCSS + meuJS +  content.tree

gui_hooks.deck_browser_will_render_content.append(renderizarDecks)
