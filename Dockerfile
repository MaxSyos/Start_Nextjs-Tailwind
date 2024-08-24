# Use a imagem base do n8n
FROM n8nio/n8n

# Exponha a porta 5678 (porta padrão do n8n)
EXPOSE 5678

# Execute o n8n
CMD ["n8n"]
