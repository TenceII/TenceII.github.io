import os

parent_directory = os.getcwd()

for filename in os.listdir(parent_directory):
    if filename.endswith('.html'):
        old_file_path = os.path.join(parent_directory, filename)
        new_filename = filename[:-5]
        new_file_path = os.path.join(parent_directory, new_filename)
        
        os.rename(old_file_path, new_file_path)
        print(f"Renamed: {old_file_path} -> {new_file_path}")
