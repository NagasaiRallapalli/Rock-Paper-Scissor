input_file = input("enter the input filename:")
output_file = "sorted_words.txt"
try:
    with open(input_file, 'r',encoding='utf=8') as f:
        text=f.read()
    words = text.lower().split()
    unique_sorted_words = sorted(set(words))
    with open(output_file, 'w',encoding='utf=8') as f:
        for word in unique_sorted_words:
            f.write(word + '\n')
    print("words have been sorted and written to", output_file)
    print("\ncontents of", output_file,"are:\n")
    with open(output_file, 'r',encoding='utf=8') as f:
        for line in f:
            print(line.strip())
except filenotfounderror:
    print("error: the input file was not found,")    